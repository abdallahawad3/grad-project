import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const addOrder = async ({
  cartId,
  address,
}: {
  cartId: string;
  address: {
    alias: string;
    details: string;
    phone: string;
    postalCode: string;
  };
}) => {
  const { data } = await axiosInstance.post(
    `/orders/${cartId}`,
    {
      address,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};
const useAddOrder = () => {
  const mutation = useMutation({
    mutationKey: ["addOrder"],
    mutationFn: addOrder,
  });

  return mutation;
};

export default useAddOrder;
