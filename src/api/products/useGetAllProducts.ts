import { axiosInstance } from "@/config/axios.config";
import type { IProduct } from "@/interface";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface IProducts {
  results: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: IProduct[];
}

const getAllProducts = async (): Promise<IProducts> => {
  const { data } = await axiosInstance.get<IProducts>("/products");
  return data;
};

const useGetAllProducts = (): UseQueryResult<IProducts> => {
  const query = useQuery<IProducts>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false, // Optional: Prevent refetching on window focus
  });

  return query;
};

export default useGetAllProducts;
