import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const changeDeliver = async (orderId: string) => {
  const { data, status } = await axiosInstance.put(`orders/${orderId}/deliver`);
  if (status !== 200) {
    throw new Error("Failed to change payment status");
  }
  return data;
};

const useChangeDeliver = () => {
  const mutation = useMutation({
    mutationKey: ["changeDeliver"],
    mutationFn: (orderId: string) => changeDeliver(orderId),
  });

  return mutation;
};

export default useChangeDeliver;
