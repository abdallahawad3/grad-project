import { axiosInstance } from "@/config/axios.config";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface IProduct {
  results: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: IProduct[];
}

const getAllProducts = async (): Promise<IProduct> => {
  const { data } = await axiosInstance.get<IProduct>("/products");
  return data;
};

const useGetAllProducts = (): UseQueryResult<IProduct> => {
  const query = useQuery<IProduct>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false, // Optional: Prevent refetching on window focus
  });

  return query;
};

export default useGetAllProducts;
