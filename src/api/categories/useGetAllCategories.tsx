import { axiosInstance } from "@/config/axios.config";
import type { ICategoryResponse } from "@/interface";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface ICategory {
  results: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: ICategoryResponse[];
}

const getAllCategories = async (): Promise<ICategory> => {
  const { data } = await axiosInstance.get<ICategory>("/categories");
  return data;
};

const useGetAllCategories = (): UseQueryResult<ICategory> => {
  const query = useQuery<ICategory>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return query;
};

export default useGetAllCategories;
