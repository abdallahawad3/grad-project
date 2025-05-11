import { axiosInstance } from "@/config/axios.config";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";

interface IUpdate {
  data: ICategory;
  id: string;
}
import type {
  ApiErrorResponse,
  ICategory,
  ICategoryResponse,
} from "@/interface";
import type { AxiosError } from "axios";

const updateCategory = async ({
  data,
  id,
}: IUpdate): Promise<ICategoryResponse> => {
  const formData = new FormData();
  formData.append("name", data.name);
  if (data.image) {
    formData.append("image", data.image);
  }
  const { data: UpdatedData } = await axiosInstance.put<ICategoryResponse>(
    `/categories/${id}`,
    formData
  );
  return UpdatedData;
};

const useUpdateCategory = (): UseMutationResult<
  ICategoryResponse,
  AxiosError<ApiErrorResponse>,
  IUpdate
> => {
  const mutation = useMutation<
    ICategoryResponse,
    AxiosError<ApiErrorResponse>,
    IUpdate
  >({
    mutationKey: ["update-category"],
    mutationFn: ({ data, id }: IUpdate) => updateCategory({ data, id }),
  });

  return mutation;
};

export default useUpdateCategory;
