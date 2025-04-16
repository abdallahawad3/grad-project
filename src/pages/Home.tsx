import Banner from "./SectionsHome/Banner";
import Features from "./SectionsHome/Features";
import { FeaturedProducts } from "./SectionsHome/FeaturedProducts";
import Header from "./SectionsHome/Header";
import ProductList from "@/components/products/ProductList";
// import { Products } from "./SectionsHome/Products";
import BestDeal from "./SectionsHome/BestDeal";
import Testimonial from "./SectionsHome/Testimonial";
import VideoSection from "./SectionsHome/VideoSection";
import Blog from "./SectionsHome/Blog";
import Contact from "./SectionsHome/Contact";

export default function HomePage() {
  return (
    <main className="container">
      <Header />
      <Features />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <ProductList />
      </div>
      <Banner />
      <BestDeal />
      <FeaturedProducts />
      <Testimonial />
      <VideoSection />
      <Blog />
      <Contact />
    </main>
  );
}
