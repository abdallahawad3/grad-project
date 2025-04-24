import ProductList from "@/components/products/ProductList";
import Details from "@/components/SingleProduct/Details";
import ProductSwiper from "@/components/SingleProduct/ProductSwiper";
import { ProductTabs } from "@/components/SingleProduct/Tabs";

const ProductPage = () => {
  return (
    <section className="container py-10">
      <div className="flex flex-col md:flex-row gap-4">
        {/* left Hand side Product details and images */}
        <div className="flex-1">
          <ProductSwiper />
        </div>
        {/* Right Hand Side Description */}
        <div className="flex-1">
          <Details />
        </div>
      </div>
      <div className="py-10">
        <ProductTabs />
      </div>
      <div>
        <h2 className="text-heading5 font-bold text-center  mb-4">
          Related Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
