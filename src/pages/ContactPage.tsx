import Form from "./SectionsContact/Form";
import Header from "./SectionsContact/Header";
import Map from "./SectionsContact/Map";
import Contact from "./SectionsHome/Contact";
import ImageContact from "../images/Breadcrumbs1.png";

const ContactPage = () => {
  return (
    <>
      <Header bgImage={ImageContact} />

      <Form />

      <Map />
      <main className="container">
        <Contact backgroundColor="#fff" />
      </main>
    </>
  );
};

export default ContactPage;
