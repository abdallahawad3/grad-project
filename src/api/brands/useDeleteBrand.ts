import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const deleteBrand = async (brandId: string) => {
  const { data } = await axiosInstance.delete(`/brands/${brandId}`);
  return data;
};
const useDeleteBrand = () => {
  const mutation = useMutation({
    mutationKey: ["delete-brand"],
    mutationFn: (brandId: string) => deleteBrand(brandId),
  });

  return mutation;
};

export default useDeleteBrand;
