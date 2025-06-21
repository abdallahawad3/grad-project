import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const deleteAddress = async (addressId: string) => {
  const { data } = await axiosInstance.delete(`/addresses/${addressId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

const useDeleteAddress = () => {
  const mutate = useMutation({
    mutationKey: ["delete-address"],
    mutationFn: (addressId: string) => deleteAddress(addressId),
  });
  return mutate;
};

export default useDeleteAddress;
