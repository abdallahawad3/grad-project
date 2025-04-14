import ProductList from "@/components/products/ProductList";

export function FeaturedProducts() {
  return (
    <section className="py-12 bg-[#EDF2EE] font-poppins">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Featured Products
          </h1>
        </div>
        <ProductList />
      </div>
    </section>
  );
}
