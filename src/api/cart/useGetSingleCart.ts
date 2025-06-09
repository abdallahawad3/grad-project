import useGetAllCart from "./useGetAllCart";

const useGetSingleCart = () => {
  const { data } = useGetAllCart();
  const getSingleCart = (cartId: string) => {
    return data?.data.products.find((item) => item.product._id === cartId);
  };

  return { getSingleCart };
};

export default useGetSingleCart;
