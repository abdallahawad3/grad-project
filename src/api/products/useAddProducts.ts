import CookieServices from "@/services/index";
import { axiosInstance } from "@/config/axios.config";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
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

export const AddProduct = async (
  product: IAddProduct
): Promise<IProductResponse> => {
  const formData = new FormData();
  formData.append("title", product.title);
  formData.append("description", product.description);
  formData.append("quantity", product.quantity.toString());
  formData.append("price", product.price.toString());
  if (product.availableColors) {
    product.availableColors.forEach((color) => {
      formData.append("availableColors", color);
    });
  }
  if (product.subcategory) {
    product.subcategory.forEach((sub) => {
      formData.append("subcategory", sub);
    });
  }
  if (product.imageCover) {
    formData.append("imageCover", product.imageCover);
  }
  if (product.images) {
    product.images.forEach((image) => {
      formData.append("images", image);
    });
  }
  formData.append("category", product.category);
  const response = await axiosInstance.post<IProductResponse>(
    "/products",
    formData,
    {
      headers: {
        Authorization: `Bearer ${CookieServices.get("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const useAddProduct = (): UseMutationResult<
  IProductResponse,
  AxiosError<ApiErrorResponse>,
  IAddProduct
> => {
  const mutation = useMutation<
    IProductResponse,
    AxiosError<ApiErrorResponse>,
    IAddProduct
  >({
    mutationKey: ["product", {}],
    mutationFn: (IAddProduct: IAddProduct) => AddProduct(IAddProduct),
  });
  return mutation;
};
