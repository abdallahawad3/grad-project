import { Button } from "@/components/ui/button";

import ProductList from "@/components/products/ProductList";

export function Products() {
  const categories = [
    { name: "All", active: true },
    { name: "Vegetables", active: false },
    { name: "Fruit", active: false },
    { name: "Meat & Fish", active: false },
    { name: "View All", active: false },
  ];

  return (
    <section className="py-12  bg-[#EDF2EE] mx-auto px-4 font-poppins">
      <div className="container relative pt-[180px] sm:pt-20 ">
        <div className="text-center my-5">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Introducing Our Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mb-10">
          {categories.map((category, index) => (
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
              {index < categories.length - 1 && (
                <div className="h-4 w-px bg-gray-300 mx-2" />
              )}
            </div>
          ))}
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </section>
  );
}
