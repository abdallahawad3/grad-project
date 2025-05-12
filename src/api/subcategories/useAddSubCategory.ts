import { axiosInstance } from "@/config/axios.config";
import type { ApiErrorResponse, ISubCategories } from "@/interface";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";
interface IAddSubCategory {
  name: string;
  category: string;
}
const addNewSubCategory = async ({
  category,
  name,
}: IAddSubCategory): Promise<ISubCategories> => {
  const { data } = await axiosInstance.post(`/subcategories`, {
    name,
    category,
  });

  return data.data;
};

const useAddSubCategory = (): UseMutationResult<
  ISubCategories,
  AxiosError<ApiErrorResponse>,
  IAddSubCategory
> => {
  const mutation = useMutation<
    ISubCategories,
    AxiosError<ApiErrorResponse>,
    IAddSubCategory
  >({
    mutationKey: ["add-sub-category"],
    mutationFn: addNewSubCategory,
  });

  return mutation;
};

export default useAddSubCategory;
