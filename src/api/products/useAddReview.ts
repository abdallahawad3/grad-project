import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const addReview = async (
  productId: string,
  reviewData: {
    rating: number;
    message: string;
  }
) => {
  const { data } = await axiosInstance.post(
    `/products/${productId}/reviews`,
    {
      rating: reviewData.rating,
      review: reviewData.message,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

const useAddReview = () => {
  const mutation = useMutation({
    mutationKey: ["addReview"],
    mutationFn: (args: {
      productId: string;
      reviewData: { rating: number; message: string };
    }) => addReview(args.productId, args.reviewData),
  });
  return mutation;
};

export default useAddReview;
