import { axiosInstance } from "@/config/axios.config";
import type { IProduct } from "@/interface";
import { useQuery } from "@tanstack/react-query";

interface IResponse {
  data: IProduct;
}

interface IError {
  message: string;
}
interface IGetSingleProduct {
  productId: string;
}

const getSingleProduct = async ({
  productId,
}: IGetSingleProduct): Promise<IResponse> => {
  const { data } = await axiosInstance.get(`/products/${productId}`);
  if (!data) {
    throw new Error("Product not found");
  }
  return data;
};

const useGetSingleProduct = ({ productId }: { productId: string }) => {
  const query = useQuery<IResponse, IError>({
    queryKey: ["product", `id-${productId}`], // Unique key for the query
    queryFn: () => getSingleProduct({ productId }),
    refetchOnWindowFocus: false,
  });
  return query;
};

export default useGetSingleProduct;
