// // EmblaCarousel.tsx
// import React, { useEffect, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import { useAutoplay } from "./EmblaCarouselAutoplay";
// import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
// import type { EmblaOptionsType } from "embla-carousel";

// type Slide = {
//   imageUrl: string;
//   heading: string;
//   description: string;
//   buttonText?: string;
//   buttonLink?: string;
// };

// type PropType = {
//   slides: Slide[];
//   options?: EmblaOptionsType;
// };

// const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
//   const progressNode = useRef<HTMLDivElement>(null);
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//     Autoplay({ playOnInit: false, delay: 5000 }),
//   ]);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const { toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi);
//   const { showAutoplayProgress } = useAutoplayProgress(
//     emblaApi,
//     progressNode as React.RefObject<HTMLElement>
//   );

//   useEffect(() => {
//     toggleAutoplay();
//   }, []);

//   return (
//     <div className="embla_hero relative w-full h-screen overflow-hidden">
//       <div className="embla__viewport_hero h-full w-full " ref={emblaRef}>
//         <div className="embla__container_hero flex h-full">
//           {slides.map((slide, index) => (
//             <div
//               className="flex-[0_0_100%] relative h-full w-full overflow-hidden"
//               key={index}
//             >
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.heading}
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                 <div className="text-center text-white max-w-2xl px-4">
//                   <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                     {slide.heading}
//                   </h1>
//                   <p className="text-lg md:text-xl mb-6">{slide.description}</p>
//                   {slide.buttonText && (
//                     <a
//                       href={slide.buttonLink || "#"}
//                       className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
//                     >
//                       {slide.buttonText}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="embla__controls_hero absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 z-10">
//         <div className="embla__buttons_hero flex gap-4">
//           <PrevButton
//             onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
//             disabled={prevBtnDisabled}
//           />
//           <NextButton
//             onClick={() => onAutoplayButtonClick(onNextButtonClick)}
//             disabled={nextBtnDisabled}
//           />
//         </div>

//         <div
//           className={`embla__progress_hero w-40 h-1 bg-white/30 rounded-full overflow-hidden ${
//             showAutoplayProgress ? "" : "hidden"
//           }`}
//         >
//           <div
//             className="embla__progress__bar_hero h-full w-full bg-white transition-all duration-500 ease-linear"
//             ref={progressNode}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;
// EmblaCarousel.tsx
// import React, { useEffect, useRef, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import { useAutoplay } from "./EmblaCarouselAutoplay";
// import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
// import type { EmblaOptionsType } from "embla-carousel";
// import { motion } from "framer-motion";

// type Slide = {
//   imageUrl: string;
//   heading: string;
//   description: string;
//   buttonText?: string;
//   buttonLink?: string;
// };

// type PropType = {
//   slides: Slide[];
//   options?: EmblaOptionsType;
// };

// const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
// const progressNode = useRef<HTMLDivElement>(null);
// const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//   Autoplay({ playOnInit: false, delay: 5000 }),
// ]);

// const {
//   prevBtnDisabled,
//   nextBtnDisabled,
//   onPrevButtonClick,
//   onNextButtonClick,
// } = usePrevNextButtons(emblaApi);

// const { toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi);
// const { showAutoplayProgress } = useAutoplayProgress(
//   emblaApi,
//   progressNode as React.RefObject<HTMLElement>
// );
// const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

// useEffect(() => {
//   if (!emblaApi) return;

//   const onSelect = () => {
//     const index = emblaApi.selectedScrollSnap();
//     setCurrentSlideIndex(index);
//   };

//   emblaApi.on("select", onSelect);
//   onSelect(); // Run initially
// }, [emblaApi]);

// useEffect(() => {
//   toggleAutoplay();
// }, []);

//   return (
//     <div className="embla_hero relative w-full h-screen overflow-hidden">
//       <div className="embla__viewport_hero h-full w-full" ref={emblaRef}>
//         <div className="embla__container_hero flex h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] relative h-full w-full overflow-hidden"
//             >
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.heading}
//                 className="w-full h-full object-cover"
//               />

//               {/* Show animation only for the visible slide */}
//               {index === currentSlideIndex && (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   className="absolute inset-0 bg-black/50 flex items-center justify-center"
//                 >
//                   <div className="text-center text-white max-w-2xl px-4">
//                     <motion.h1
//                       className="text-4xl md:text-5xl font-bold mb-4"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       {slide.heading}
//                     </motion.h1>
//                     <motion.p
//                       className="text-lg md:text-xl mb-6"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       {slide.description}
//                     </motion.p>
//                     {slide.buttonText && (
//                       <motion.a
//                         href={slide.buttonLink || "#"}
//                         className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.6 }}
//                       >
//                         {slide.buttonText}
//                       </motion.a>
//                     )}
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Controls */}
// <div className="embla__controls absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 z-10">
//   <div className="embla__buttons flex gap-4">
//     <PrevButton
//       onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
//       disabled={prevBtnDisabled}
//     />
//     <NextButton
//       onClick={() => onAutoplayButtonClick(onNextButtonClick)}
//       disabled={nextBtnDisabled}
//     />
//   </div>

//   <div
//     className={`embla__progress w-40 h-1 bg-white/30 rounded-full overflow-hidden ${
//       showAutoplayProgress ? "" : "hidden"
//     }`}
//   >
//     <div
//       className="embla__progress__bar h-full w-full bg-white transition-all duration-500 ease-linear"
//       ref={progressNode}
//     />
//   </div>
// </div>
// </div>
//   );
// };

// export default EmblaCarousel;
// EmblaCarousel.tsx
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import type { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";

type Slide = {
  imageUrl: string;
  heading: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 5000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi);
  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as React.RefObject<HTMLElement>
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentSlideIndex(index);
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Run initially
  }, [emblaApi]);

  useEffect(() => {
    toggleAutoplay();
  }, []);
  return (
    <div className="embla_hero relative w-full h-screen overflow-hidden">
      <div className="embla__viewport_hero h-full w-full" ref={emblaRef}>
        <div className="embla__container_hero flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] relative h-full w-full overflow-hidden"
            >
              <img
                src={slide.imageUrl}
                alt={slide.heading}
                className="w-full h-full object-cover"
              />

              {/* Static Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                {/* Animate content only on active slide */}
                {index === currentSlideIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center text-white max-w-2xl px-4"
                  >
                    <motion.h1
                      className="text-4xl md:text-5xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.heading}
                    </motion.h1>

                    <motion.p
                      className="text-lg md:text-xl mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>

                    {slide.buttonText && (
                      <motion.a
                        href={slide.buttonLink || "#"}
                        className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {slide.buttonText}
                      </motion.a>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 z-10">
        <div className="embla__buttons flex gap-4">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress w-40 h-1 bg-white/30 rounded-full overflow-hidden ${
            showAutoplayProgress ? "" : "hidden"
          }`}
        >
          <div
            className="embla__progress__bar h-full w-full bg-white transition-all duration-500 ease-linear"
            ref={progressNode}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
