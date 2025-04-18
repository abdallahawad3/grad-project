import Header from "./SectionsContact/Header";
import ImageAbout from "../images/Breadcrumbs2.png";
import Contact from "./SectionsHome/Contact";
import Hero from "./SectionsAbout.tsx/Hero";
import FeaturesAbout from "./SectionsAbout.tsx/FeaturesAbout";
import Delivery from "./SectionsAbout.tsx/Delivery";
import Team from "./SectionsAbout.tsx/Team";
import Testimonial from "./SectionsHome/Testimonial";

const About = () => {
  return (
    <>
      <Header bgImage={ImageAbout} />

      <Hero />
      <FeaturesAbout />
      <Delivery />
      <Team />
      <Testimonial />
      <main className="container">
        <Contact backgroundColor="#fff" />
      </main>
    </>
  );
};

export default About;
