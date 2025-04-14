import ImageProduct1 from "../../images/ProductImage1.png";
import ImageProduct2 from "../../images/ProductImage2.png";
import ImageProduct3 from "../../images/ProductImage3.png";
import ImageProduct4 from "../../images/ProductImage4.png";
import ImageProduct5 from "../../images/ProductImage5.png";
import ImageProduct6 from "../../images/ProductImage6.png";
import ImageProduct7 from "../../images/ProductImage7.png";
import ImageProduct8 from "../../images/ProductImage8.png";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    oldPrice: 20.99,
    discount: 50,
    image: ImageProduct1,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Surjapur Mango",
    price: 14.99,
    image: ImageProduct2,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Red Tomatos",
    price: 14.99,
    image: ImageProduct3,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Fresh Cauliflower",
    price: 14.99,
    image: ImageProduct4,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Green Lettuce",
    price: 14.99,
    image: ImageProduct5,
    rating: 4.1,
  },
  {
    id: 6,
    name: "Eggplant",
    price: 14.99,
    image: ImageProduct6,
    rating: 4.3,
  },
  {
    id: 7,
    name: "Green Chilli",
    price: 14.99,
    image: ImageProduct7,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Eggplant",
    price: 14.99,
    image: ImageProduct8,
    rating: 4.4,
  },
];

const ProductList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
