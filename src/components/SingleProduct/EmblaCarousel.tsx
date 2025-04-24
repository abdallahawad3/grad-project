import { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";

type PropType = {
  slides: { id: number; src: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport  p-4" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <img
                className="embla__slide__img bg-cover h-auto  md:h-[20rem]"
                src={slide.src}
                alt={`Slide ${slide.id + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide) => (
              <Thumb
                key={slide.id}
                onClick={() => onThumbClick(slide.id)}
                selected={slide.id === selectedIndex}
                index={slide.id}
                src={slide.src} // 🔥 Pass the image source to the thumbnail
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
