import CookieServices from "@/services/index";
import { axiosInstance } from "@/config/axios.config";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type {
  ApiErrorResponse,
  ICategory,
  ICategoryResponse,
} from "@/interface";
import type { AxiosError } from "axios";

export const AddCategory = async (
  CategoryData: ICategory
): Promise<ICategoryResponse> => {
  const formData = new FormData();
  formData.append("name", CategoryData.name);
  if (CategoryData.image) {
    formData.append("image", CategoryData.image);
  }
  const { data } = await axiosInstance.post<ICategoryResponse>(
    "/categories",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${CookieServices.get("token")}`,
      },
    }
  );
  return data;
};

export const useAddCategory = (): UseMutationResult<
  ICategoryResponse,
  AxiosError<ApiErrorResponse>,
  ICategory
> => {
  const mutation = useMutation<
    ICategoryResponse,
    AxiosError<ApiErrorResponse>,
    ICategory
  >({
    mutationKey: ["category", {}],
    mutationFn: (ICategory: ICategory) => AddCategory(ICategory),
  });

  return mutation;
};
