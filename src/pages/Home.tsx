import Banner from "./SectionsHome/Banner";
// import Features from "./SectionsHome/Features";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Hero/Header";
import BestDeal from "./SectionsHome/BestDeal";
import Testimonial from "./SectionsHome/Testimonial";
import Blog from "./SectionsHome/Blog";
import Contact from "./SectionsHome/Contact";
import { Products } from "./SectionsHome/Products";
import Categories from "./SectionsHome/Categories";
import Brands from "./SectionsHome/Brands";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <Categories />
        <Brands />
        <Products />
        <Banner />
        <BestDeal />
        <FeaturedProducts />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
