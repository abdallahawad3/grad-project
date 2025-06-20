import type { IProduct } from "@/interface";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import { useEffect } from "react";
import { getAllWishlistItems } from "@/app/features/wishlist/wishlistSlice";
import { getAllCartItems } from "@/app/features/Cart/cartSlice";

const ProductList = ({ products }: { products: IProduct[] }) => {
  const { items, loading } = useAppSelector(
    (state: RootState) => state.wishlist
  );
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const { data } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllWishlistItems());
      dispatch(getAllCartItems());
    }
  }, [isAuthenticated, dispatch]);
  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              isAuthenticated={isAuthenticated}
              cartItems={data}
              items={items}
              loading={loading}
              key={product._id}
              product={product}
            />
          );
        })}
    </>
  );
};

export default ProductList;
