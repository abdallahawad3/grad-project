import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const updateAddress = async ({
  addressId,
  data,
}: {
  addressId: string;
  data: {
    alias: string;
    details: string;
    phone: string;
  };
}) => {
  const { data: responseData } = await axiosInstance.put(
    `/addresses/${addressId}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return responseData;
};
const useUpdateAddress = () => {
  const mutation = useMutation({
    mutationKey: ["update-address"],
    mutationFn: ({
      addressId,
      data,
    }: {
      addressId: string;
      data: {
        alias: string;
        details: string;
        phone: string;
      };
    }) => updateAddress({ addressId, data }),
  });

  return mutation;
};

export default useUpdateAddress;
