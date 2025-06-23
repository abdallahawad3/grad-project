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
  const { isAuthenticated, role, cart } = useAppSelector(
    (state: RootState) => state.auth
  );
  const { data } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated && role === "user" && cart.products.length > 0) {
      dispatch(getAllWishlistItems());
      dispatch(getAllCartItems());
    }
  }, [isAuthenticated, dispatch, role, cart.products]);

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
