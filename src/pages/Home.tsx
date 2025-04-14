import Banner from "./SectionsHome/Banner";
import Features from "./SectionsHome/Features";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Header";
import ProductList from "@/components/products/ProductList";

export default function HomePage() {
  return (
    <main className="container">
      <Header />
      <Features />
      <ProductList />
      <Banner />
      <FeaturedProducts />
    </main>
  );
}
