import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const updateBrand = async (
  brandId: string,
  brandData: { name: string; image: File }
) => {
  const formData = new FormData();
  formData.append("name", brandData.name);
  if (brandData.image) {
    formData.append("image", brandData.image);
  }
  const { data } = await axiosInstance.put(`/brands/${brandId}`, formData);
  return data;
};

const useUpdateBrand = () => {
  const mutation = useMutation({
    mutationKey: ["update-brand"],
    mutationFn: (data: {
      brandId: string;
      brandData: { name: string; image: File };
    }) => updateBrand(data.brandId, data.brandData),
  });

  return mutation;
};

export default useUpdateBrand;
