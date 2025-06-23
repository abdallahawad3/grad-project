import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

const getSingleOrder = async ({ orderId }: { orderId: string }) => {
  const { data, status } = await axiosInstance.get(`/orders/${orderId}`);
  if (status !== 200) {
    throw new Error("Failed to fetch order");
  }
  return data;
};

const useGetSingleOrder = ({ orderId }: { orderId: string }) => {
  const query = useQuery({
    queryKey: ["order"],
    queryFn: () => getSingleOrder({ orderId }),
    refetchOnWindowFocus: false,
  });
  return query;
};

export default useGetSingleOrder;
