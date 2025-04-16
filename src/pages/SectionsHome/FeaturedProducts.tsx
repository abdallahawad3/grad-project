import ProductList from "@/components/products/ProductList";

export function FeaturedProducts() {
  return (
    <section className="py-12 bg-[white] font-poppins">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Featured Products
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <ProductList />
        </div>
      </div>
    </section>
  );
}
