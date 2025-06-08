import { axiosInstance } from "@/config/axios.config";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";

interface IUpdate {
  data: IAddProduct;
  id: string;
}

interface IProductResponse {
  data: {
    title: string;
    slug: string;
    description: string;
    quantity: number;
    sold: number;
    price: number;
    availableColors: string[];
    imageCover: string;
    images: string[];
    category: string;
    subcategory: string[];
    ratingsQuantity: number;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  };
}
import type { ApiErrorResponse, IAddProduct } from "@/interface";
import type { AxiosError } from "axios";

const updateProduct = async ({
  data,
  id,
}: IUpdate): Promise<IProductResponse> => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("quantity", data.quantity.toString());
  formData.append("price", data.price.toString());
  formData.append("availableColors", JSON.stringify(data.availableColors));
  if (data.imageCover) {
    formData.append("imageCover", data.imageCover);
  }
  if (data.images) {
    data.images.forEach((image) => {
      formData.append("images", image);
    });
  }
  formData.append("category", data.category);

  const { data: UpdatedData } = await axiosInstance.put<IProductResponse>(
    `/products/${id}`,
    formData
  );
  return UpdatedData;
};

const useUpdateProduct = (): UseMutationResult<
  IProductResponse,
  AxiosError<ApiErrorResponse>,
  IUpdate
> => {
  const mutation = useMutation<
    IProductResponse,
    AxiosError<ApiErrorResponse>,
    IUpdate
  >({
    mutationKey: ["update-product"],
    mutationFn: ({ data, id }: IUpdate) => updateProduct({ data, id }),
  });

  return mutation;
};

export default useUpdateProduct;
