import CookieServices from "@/services/index";
import type { RootState } from "@/app/store";
import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface ICartCategory {
  name: string;
}

interface ICartBrand {
  name: string;
}

interface ICartProduct {
  _id: string;
  title: string;
  imageCover: string;
  category: ICartCategory;
  brand: ICartBrand;
  id: string;
}

interface ICartProductItem {
  product: ICartProduct;
  count: number;
  price: number;
  _id: string;
}

interface ICartData {
  _id: string;
  products: ICartProductItem[];
  cartOwner: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

interface ICartResponse {
  numOfCartItems: number;
  data: ICartData;
}

const getAllCart = async (isAuth: boolean): Promise<ICartResponse> => {
  if (!isAuth) throw new Error("User is not authenticated");
  const { data } = await axiosInstance.get<ICartResponse>("/cart", {
    headers: {
      Authorization: `Bearer ${CookieServices.get("token")}`,
    },
  });
  return data;
};

const useGetAllCart = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const query = useQuery<ICartResponse, Error>({
    queryKey: ["cart", "get-all-cart"],
    queryFn: () => getAllCart(isAuthenticated),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  useEffect(() => {
    query.refetch();
  }, [isAuthenticated, query]);

  return query;
};

export default useGetAllCart;
