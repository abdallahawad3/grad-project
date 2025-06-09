import type { IProduct } from "@/interface";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      {products &&
        products.map((ele) => <ProductCard key={ele._id} product={ele} />)}
    </>
  );
};

export default ProductList;
