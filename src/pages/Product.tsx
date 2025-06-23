import useGetAllProducts from "@/api/products/useGetAllProducts";
import useGetSingleProduct from "@/api/products/useGetSingleProduct";
import { getAllCartItems } from "@/app/features/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import ProductList from "@/components/products/ProductList";
import Details from "@/components/SingleProduct/Details";
import ProductSwiper from "@/components/SingleProduct/ProductSwiper";
import { ProductTabs } from "@/components/SingleProduct/Tabs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const { data: singleProduct } = useGetSingleProduct({
    productId: id as string,
  });

  // TODO Update This and fetch all products that are related to the single product category 🎯🎯//
  const { data: productData } = useGetAllProducts();
  const products = productData?.data ?? [];
  // TODO Update This and fetch all products that are related to the single product category 🎯🎯//

  const productImages = singleProduct?.data?.images ?? [];
  const ImageSlides = productImages.map((image, idx) => ({
    id: idx,
    src: image,
    alt: "Product Image",
  }));
  const { items, loading: wishlistLoading } = useAppSelector(
    (state: RootState) => state.wishlist
  );
  const { isAuthenticated, cart, role } = useAppSelector(
    (state: RootState) => state.auth
  );
  const { data, loading: cartLoading } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated && cart.products.length > 0 && role === "user") {
      dispatch(getAllCartItems());
    }
  }, [isAuthenticated, dispatch, cart.products, role]);

  return (
    <section className="container py-10">
      <div className="flex flex-col md:flex-row gap-4">
        {/* left Hand side Product details and images */}
        <div className="flex-1">
          <ProductSwiper slides={ImageSlides} />
        </div>
        {/* Right Hand Side Description */}
        <div className="flex-1">
          {singleProduct && (
            <Details
              wishlistLoading={wishlistLoading}
              cartLoading={cartLoading}
              items={items ?? []}
              isAuthenticated={isAuthenticated}
              cartItems={data ?? {}}
              product={singleProduct?.data}
            />
          )}
        </div>
      </div>
      <div className="py-10">
        <ProductTabs productId={id as string} />
      </div>
      <div>
        <h2 className="text-heading5 font-bold text-center  mb-4">
          Related Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <ProductList products={products} />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
