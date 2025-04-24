import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";
import img1 from "../../assets/imgs/singleProduct1.jpg";
import img2 from "../../assets/imgs/singleProduct2.jpg";
import img3 from "../../assets/imgs/singleProduct3.jpg";
import img4 from "../../assets/imgs/singleProduct4.jpg";
import img5 from "../../assets/imgs/singleProduct5.jpg";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {};
const SLIDES = [
  { id: 0, src: img1 },
  { id: 1, src: img2 },
  { id: 2, src: img3 },
  { id: 3, src: img4 },
  { id: 4, src: img5 },
];
const ProductSwiper = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ProductSwiper;
