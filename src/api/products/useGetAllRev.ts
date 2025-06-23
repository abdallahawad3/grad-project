import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

const getAllReview = async () => {
  const { data } = await axiosInstance.get(`/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

const useFetchAllReviews = () => {
  const query = useQuery({
    queryKey: ["all-review"],
    queryFn: () => getAllReview(),
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useFetchAllReviews;
