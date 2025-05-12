import { axiosInstance } from "@/config/axios.config";
import type { ApiErrorResponse, ISubCategories } from "@/interface";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";
interface IAddSubCategory {
  name: string;
  category: string;
  id: string;
}
const editSubCategory = async ({
  category,
  name,
  id,
}: IAddSubCategory): Promise<ISubCategories> => {
  const { data } = await axiosInstance.put(`/subcategories/${id}`, {
    name,
    category,
  });

  return data.data;
};

const useUpdateSubCategory = (): UseMutationResult<
  ISubCategories,
  AxiosError<ApiErrorResponse>,
  IAddSubCategory
> => {
  const mutation = useMutation<
    ISubCategories,
    AxiosError<ApiErrorResponse>,
    IAddSubCategory
  >({
    mutationKey: ["edit-sub-category"],
    mutationFn: editSubCategory,
  });

  return mutation;
};

export default useUpdateSubCategory;
