import { axiosInstance } from "@/config/axios.config";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type IDeleteCategoryResponse = unknown;
type IDeleteCategoryRequest = string;
const deleteCategory = async (categoryId: string) => {
  const { data } = await axiosInstance.delete(`/categories/${categoryId}`);
  return data;
};

const useDeleteCategory = (): UseMutationResult<
  IDeleteCategoryResponse,
  AxiosError,
  IDeleteCategoryRequest
> => {
  const mutation = useMutation<
    IDeleteCategoryResponse,
    AxiosError,
    IDeleteCategoryRequest
  >({
    mutationKey: ["deleteCategory"],
    mutationFn: (id: IDeleteCategoryRequest) => deleteCategory(id),
  });

  return mutation;
};

export default useDeleteCategory;
