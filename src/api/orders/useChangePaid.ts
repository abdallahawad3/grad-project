import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const changePaid = async (orderId: string) => {
  const { data, status } = await axiosInstance.put(`orders/${orderId}/pay`);
  if (status !== 200) {
    throw new Error("Failed to change payment status");
  }
  return data;
};

const useChangePaid = () => {
  const mutation = useMutation({
    mutationKey: ["changePaid"],
    mutationFn: (orderId: string) => changePaid(orderId),
  });

  return mutation;
};

export default useChangePaid;
