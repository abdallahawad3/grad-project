import Banner from "./SectionsHome/Banner";
import Featured from "./SectionsHome/Featured";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Header";
import { Products } from "./SectionsHome/Products";

export default function HomePage() {
  return (
    <>
      <Header />
      <Featured />
      <Products />
      <Banner />
      <FeaturedProducts />
    </>
  );
}
