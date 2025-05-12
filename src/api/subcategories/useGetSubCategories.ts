import { axiosInstance } from "@/config/axios.config";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface ISubCategories {
  results: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: ISubCategories[];
}
const getAllSubCategories = async (): Promise<ISubCategories> => {
  const { data } = await axiosInstance.get<ISubCategories>("/subcategories");
  return data;
};

const useGetSubCategories = (): UseQueryResult<ISubCategories> => {
  const query = useQuery({
    queryKey: ["subcategories"],
    queryFn: getAllSubCategories,
  });

  return query;
};

export default useGetSubCategories;
