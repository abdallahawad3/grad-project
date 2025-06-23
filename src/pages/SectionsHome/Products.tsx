// import { Button } from "@/components/ui/button";

import ProductList from "@/components/products/ProductList";
// import useGetAllCategories from "@/api/categories/useGetAllCategories";
import useGetAllProducts from "@/api/products/useGetAllProducts";

export function Products() {
  const { data: productData } = useGetAllProducts();
  const products = productData?.data ?? [];
  return (
    <section className="mx-auto px-4 font-poppins">
      <div className="container relative pt-[180px] sm:pt-20 ">
        <div className="text-center my-5">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Introducing Our Products
          </h1>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
