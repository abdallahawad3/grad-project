import Banner from "./SectionsHome/Banner";
import Features from "./SectionsHome/Features";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Header";
<<<<<<< HEAD
import ProductList from "@/components/products/ProductList";
=======
import { Products } from "./SectionsHome/Products";
import BestDeal from "./SectionsHome/BestDeal";
import Testimonial from "./SectionsHome/Testimonial";
import VideoSection from "./SectionsHome/VideoSection";
import Blog from "./SectionsHome/Blog";
import Contact from "./SectionsHome/Contact";
>>>>>>> home-sections

export default function HomePage() {
  return (
    <main className="container">
      <Header />
      <Features />
      <ProductList />
      <Banner />
      <BestDeal />
      <FeaturedProducts />
<<<<<<< HEAD
    </main>
=======
      <Testimonial />
      <VideoSection />
      <Blog />
      <Contact />
    </>
>>>>>>> home-sections
  );
}
