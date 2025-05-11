import { axiosInstance } from "@/config/axios.config";
import type { ApiErrorResponse } from "@/interface";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface IBrandResponse {
  name: string;
  slug: string;
  image: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
interface IBrandRequest {
  name: string;
  image: File;
}
const addNewBrand = async ({
  image,
  name,
}: IBrandRequest): Promise<IBrandResponse> => {
  const formData = new FormData();
  formData.append("name", name);
  if (image) {
    formData.append("image", image);
  }
  const { data } = await axiosInstance.post<IBrandResponse>(
    "/brands",
    formData
  );

  return data;
};

const useAddBrand = (): UseMutationResult<
  IBrandResponse,
  AxiosError<ApiErrorResponse>,
  IBrandRequest
> => {
  const mutation = useMutation<
    IBrandResponse,
    AxiosError<ApiErrorResponse>,
    IBrandRequest
  >({
    mutationKey: ["add-brand"],
    mutationFn: (data: IBrandRequest) => addNewBrand(data),
  });

  return mutation;
};

export default useAddBrand;
