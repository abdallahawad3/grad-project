import { Button } from "@/components/ui/button";

import ProductList from "@/components/products/ProductList";
import useGetAllCategories from "@/api/categories/useGetAllCategories";
import useGetAllProducts from "@/api/products/useGetAllProducts";

export function Products() {
  const { data } = useGetAllCategories();

  const { data: productData } = useGetAllProducts();
  const products = productData?.data ?? [];
  return (
    <section className="py-12  bg-[#EDF2EE] mx-auto px-4 font-poppins">
      <div className="container relative pt-[180px] sm:pt-20 ">
        <div className="text-center my-5">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Introducing Our Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mb-10">
          {data?.data &&
            data?.data.map((category, index) => (
              <div key={category.name} className="flex items-center">
                <Button
                  variant="ghost"
                  className={`
          bg-[#EDF2EE]
          ${
            index === 0
              ? "text-[#00B207] font-medium "
              : "text-gray-500 font-normal"
          }
          rounded-none
          px-6
          hover:bg-[#EDF2EE]
          hover:text-[#00B207]
          relative
          whitespace-nowrap
        `}
                >
                  {category.name}
                  {index === 0 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-24px)] h-[2px] bg-[#00B207]" />
                  )}
                </Button>
              </div>
            ))}
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
