import Banner from "./SectionsHome/Banner";
import Features from "./SectionsHome/Features";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Header";
import { Products } from "./SectionsHome/Products";

export default function HomePage() {
  return (
    <>
      <Header />
      <Features />
      <Products />
      <Banner />
      <FeaturedProducts />
    </>
  );
}
