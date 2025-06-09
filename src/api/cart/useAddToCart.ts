import CookieServices from "@/services/index";
import { axiosInstance } from "@/config/axios.config";
import type { ApiErrorResponse } from "@/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

interface AddToCartRequest {
  productId: string;
  count: number;
}

interface AddToCartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  data: {
    _id: string;
    products: {
      product: string;
      count: number;
      price: number;
      _id: string;
    }[];
    cartOwner: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
  };
}

const addToCart = async ({
  productId,
  count,
}: AddToCartRequest): Promise<AddToCartResponse> => {
  const { data } = await axiosInstance.post<AddToCartResponse>(
    "/cart",
    { productId, count },
    {
      headers: {
        Authorization: `Bearer ${CookieServices.get("token")}`,
      },
    }
  );

  if (data.status === "success") {
    if (count > 1) {
      toast.success(`Added ${count} items to cart`);
    } else {
      toast.success("Item added to cart");
    }
  } else {
    toast.error(data.message);
  }
  return data;
};

const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation<
    AddToCartResponse,
    AxiosError<ApiErrorResponse>,
    AddToCartRequest
  >({
    mutationKey: ["cart", "add-to-cart"],
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", "get-all-cart"] });
    },
    onError: (error) => {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while adding to cart");
      }
    },
  });
};

export default useAddToCart;
