import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {};

const ProductSwiper = ({
  slides,
}: {
  slides: { src: string; id: number; alt: string }[];
}) => {
  return (
    <div>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  );
};

export default ProductSwiper;
