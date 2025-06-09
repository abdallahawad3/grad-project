import CookieServices from "@/services/index";

import { axiosInstance } from "@/config/axios.config";
import type { ApiErrorResponse } from "@/interface";
import { useQueryClient } from "@tanstack/react-query";

import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

type IDeleteCartResponse = unknown;
type IDeleteCartRequest = string;
const deleteCart = async (cartId: string) => {
  const { data, status } = await axiosInstance.delete(`/cart/${cartId}`, {
    headers: {
      Authorization: `Bearer ${CookieServices.get("token")}`,
    },
  });
  if (status === 200) {
    toast.success("Cart deleted successfully");
  } else {
    toast.error("Failed to delete cart");
  }
  return data;
};
const useDeleteCart = (): UseMutationResult<
  IDeleteCartResponse,
  AxiosError<ApiErrorResponse>,
  IDeleteCartRequest
> => {
  const queryClient = useQueryClient();
  const mutation = useMutation<
    IDeleteCartResponse,
    AxiosError<ApiErrorResponse>,
    IDeleteCartRequest
  >({
    mutationKey: ["deleteCart"],
    mutationFn: (id: IDeleteCartRequest) => deleteCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", "get-all-cart"] });
    },
  });
  return mutation;
};

export default useDeleteCart;
