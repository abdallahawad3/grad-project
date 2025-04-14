import Banner from "./SectionsHome/Banner";
import Features from "./SectionsHome/Features";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Header";
import { Products } from "./SectionsHome/Products";
import BestDeal from "./SectionsHome/BestDeal";
import Testimonial from "./SectionsHome/Testimonial";
import VideoSection from "./SectionsHome/VideoSection";
import Blog from "./SectionsHome/Blog";
import Contact from "./SectionsHome/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <Features />
      <Products />
      <Banner />
      <BestDeal />
      <FeaturedProducts />
      <Testimonial />
      <VideoSection />
      <Blog />
      <Contact />
    </>
  );
}
