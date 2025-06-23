import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

const getAllOrders = async () => {
  const { data } = await axiosInstance.get("/orders", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

const useGetAllOrders = () => {
  const query = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useGetAllOrders;
