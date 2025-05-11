import { axiosInstance } from "@/config/axios.config";
import type { IBrand } from "@/interface";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface IBrandResponse {
  results: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: IBrand[];
}

const getAllBrands = async (): Promise<IBrandResponse> => {
  const { data } = await axiosInstance.get<IBrandResponse>("/brands");
  return data;
};

const useGetBrands = (): UseQueryResult<IBrandResponse> => {
  const query = useQuery({
    queryKey: ["brands"],
    queryFn: () => getAllBrands(),
  });

  return query;
};

export default useGetBrands;
