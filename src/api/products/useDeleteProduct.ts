import { axiosInstance } from "@/config/axios.config";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type IDeleteProductResponse = unknown;
type IDeleteProductRequest = string;
const deleteProduct = async (productId: string) => {
  const { data } = await axiosInstance.delete(`/products/${productId}`);
  return data;
};

const useDeleteProduct = (): UseMutationResult<
  IDeleteProductResponse,
  AxiosError,
  IDeleteProductRequest
> => {
  const mutation = useMutation<
    IDeleteProductResponse,
    AxiosError,
    IDeleteProductRequest
  >({
    mutationKey: ["deleteProduct"],
    mutationFn: (id: IDeleteProductRequest) => deleteProduct(id),
  });

  return mutation;
};

export default useDeleteProduct;
