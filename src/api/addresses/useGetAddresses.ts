import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

const getAllAddresses = async () => {
  const { data } = await axiosInstance.get("/addresses", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

const useGetAddresses = () => {
  const query = useQuery({
    queryKey: ["addresses"],
    queryFn: getAllAddresses,
    refetchOnWindowFocus: false,
  });
  return query;
};

export default useGetAddresses;
