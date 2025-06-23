/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./tabs.css";
import Divider from "../ui/Divider";
import { RatingComponent } from "../ui/Rating";
import { Textarea } from "../ui/textarea";
import { useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import { useState } from "react";
import toast from "react-hot-toast";
import useAddReview from "@/api/products/useAddReview";
import useGetAllReview from "@/api/products/useGetAllReview";
import { getRelativeTime } from "@/hooks/use-handel-date";
export function ProductTabs({ productId }: { productId: string }) {
  // This component is used to display customer feedback and ratings for a product.
  const { data, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth
  );
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const { mutate: AddReview } = useAddReview();
  const { data: allReviewData, refetch } = useGetAllReview(productId);

  const submitHandler = () => {
    if (rating === 0) {
      toast.error("Please select a rating before submitting your feedback.");
      return;
    }
    if (message.trim() === "") {
      toast.error("Please enter a message before submitting your feedback.");
      return;
    }

    // Here you would typically send the rating and message to your backend
    AddReview(
      {
        productId,
        reviewData: {
          rating,
          message,
        },
      },
      {
        onSuccess: () => {
          toast.success("Feedback submitted successfully!");
          setRating(0);
          setMessage("");
          refetch();
        },
        onError: (error: any) => {
          toast.error(`${error.response.data.errors[0].msg}`);
          setRating(0);
          setMessage("");
        },
      }
    );
  };

  return (
    <Tabs defaultValue="customer" className="mx-auto bg-transparent">
      <TabsList className="w-full flex flex-wrap bg-transparent mb-10 md:mb-15">
        <TabsTrigger
          className="outline-none shadow-none border-none background-[#FCF7AE] text-[#0A947C] focus-visible:shadow-0  focus-visible:ring-0"
          value="customer"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>
      <Divider />
      <TabsContent value="customer">
        <div className="mx-auto">
          {isAuthenticated && (
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold">Leave a Feedback</h2>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-body-lg-400 font-semibold mt-2">
                    {data?.name}
                  </p>
                  <RatingComponent
                    handleRating={handleRating}
                    isReadOnly={false}
                    ratingVal={rating}
                  />
                </div>
              </div>
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Type your message here."
              />
              <div className="flex items-center justify-end mt-4">
                <button
                  onClick={submitHandler}
                  className="bg-[#0A947C] text-white px-6 py-2 rounded-full hover:bg-[#087866] transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {allReviewData?.data.map((ele: any) => {
            return (
              <div key={ele._id} className="mb-8">
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                        alt="customer"
                        className="size-[50px] object-cover rounded-full"
                      />
                      <div>
                        <h3>{ele.user.name}</h3>
                        <RatingComponent
                          handleRating={handleRating}
                          isReadOnly={true}
                          ratingVal={ele.rating}
                        />
                      </div>
                    </div>
                    <p className="text-body-sm-500 text-gray-500">
                      {getRelativeTime(ele.createdAt)}
                    </p>
                  </div>
                  <p className="text-body-md-400 text-gray-500 mt-2">
                    {ele.review.length > 200
                      ? `${ele.review.slice(0, 200)}...`
                      : ele.review}
                  </p>
                </div>
                <Divider />
              </div>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}
