import useGetAllProducts from "@/api/products/useGetAllProducts";
import useGetSingleProduct from "@/api/products/useGetSingleProduct";
import ProductList from "@/components/products/ProductList";
import Details from "@/components/SingleProduct/Details";
import ProductSwiper from "@/components/SingleProduct/ProductSwiper";
import { ProductTabs } from "@/components/SingleProduct/Tabs";
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

  return (
    <section className="container py-10">
      <div className="flex flex-col md:flex-row gap-4">
        {/* left Hand side Product details and images */}
        <div className="flex-1">
          <ProductSwiper slides={ImageSlides} />
        </div>
        {/* Right Hand Side Description */}
        <div className="flex-1">
          {singleProduct && <Details product={singleProduct?.data} />}
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
          <ProductList products={products} />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
