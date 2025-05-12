import { axiosInstance } from "@/config/axios.config";
import { useMutation } from "@tanstack/react-query";

const deleteSubCategory = async (subCategoryId: string) => {
  const { data } = await axiosInstance.delete(
    `/subcategories/${subCategoryId}`
  );
  return data;
};

const useDeleteSubCategory = () => {
  const mutation = useMutation({
    mutationKey: ["deleteSubCategory"],
    mutationFn: deleteSubCategory,
  });

  return mutation;
};

export default useDeleteSubCategory;
