import type { IProduct } from "@/interface";
import ProductCard from "./ProductCard";
import useAddToCart from "@/api/cart/useAddToCart";
import useGetSingleCart from "@/api/cart/useGetSingleCart";
import useDeleteCart from "@/api/cart/useDeleteCart";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import toast from "react-hot-toast";

const ProductList = ({ products }: { products: IProduct[] }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { mutate: AddToCart } = useAddToCart();
  const { mutate: deleteCartProduct } = useDeleteCart();
  const { getSingleCart } = useGetSingleCart();

  return (
    <>
      {products &&
        products.map((product) => {
          const singleCartProduct = getSingleCart(product._id);
          const count =
            isAuthenticated && singleCartProduct ? singleCartProduct.count : 1;
          const inCart =
            isAuthenticated &&
            singleCartProduct &&
            singleCartProduct.product._id === product._id &&
            count !== 0;

          return (
            <ProductCard
              key={product._id}
              product={product}
              isAuthenticated={isAuthenticated}
              count={count}
              inCart={!!inCart}
              onAdd={() => {
                AddToCart({
                  productId: product._id,
                  count: singleCartProduct ? singleCartProduct.count + 1 : 1,
                });
              }}
              onRemove={() => {
                if (singleCartProduct) {
                  deleteCartProduct(singleCartProduct._id);
                }
              }}
              onAddToCart={() => {
                if (isAuthenticated) {
                  AddToCart({ productId: product._id, count: 0 });
                } else {
                  toast.error("Please login to add items to cart");
                }
              }}
            />
          );
        })}
    </>
  );
};

export default ProductList;
