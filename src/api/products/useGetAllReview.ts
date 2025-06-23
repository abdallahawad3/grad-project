import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

const getAllReview = async (productId: string) => {
  const { data } = await axiosInstance.get(`/products/${productId}/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

const useGetAllReview = (productId: string) => {
  const query = useQuery({
    queryKey: ["getAllReview", productId],
    queryFn: () => getAllReview(productId),
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useGetAllReview;
