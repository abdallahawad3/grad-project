"use client";
import EmblaCarousel from "./EmblaCarousel";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import ImageHome from "../../images/fruits.png";
/*
<div className="relative w-full bg-white flex items-center justify-center overflow-hidden px-4 py-8 md:py-0  h-[calc(100vh-120px)] md:h-[calc(100vh-164px)]">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-[1px] border-[#DAE5DA] bg-white/80 shadow-md hover:bg-white/80"
          >
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
          </Button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-[1px] border-[#DAE5DA] bg-white/80 shadow-md hover:bg-white/80"
          >
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
          </Button>
        </div>

        
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 w-full max-w-7xl px-4">
          <div className="relative w-full md:w-auto mt-8 md:mt-0">
            <img
              src={ImageHome}
              alt="Featured"
              className="w-full max-w-[795px] h-auto max-h-[300px] md:max-h-[500px] md:h-[564px] object-contain rounded-md"
            />
            <div className="absolute top-[5%] md:top-[180px] -right-4 md:-right-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full bg-[#FF8A00] text-white flex flex-col items-center justify-center z-10 shadow-lg font-poppins">
              <span className="font-semibold text-xl md:text-[32px]">70%</span>
              <span className="font-light text-xs md:text-[16px] -mt-1">
                OFF
              </span>
            </div>
          </div>

          <div className="text-center md:text-left max-w-md space-y-3 md:space-y-6 px-4 md:px-0">
            <p className="text-[#00B207] text-xs md:text-sm uppercase tracking-wider font-segoe mb-1 md:mb-3">
              Welcome to Shopery
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1.2] font-semibold font-poppins mb-3 md:mb-6">
              Fresh & Healthy Organic Food
            </h1>
            <span className="font-poppins font-normal text-[#618062] text-xs md:text-base lg:text-lg leading-relaxed block mb-4 md:mb-8">
              Free shipping on all your order. we deliver, you enjoy
            </span>
            <Button className="w-full sm:w-[180px] h-[40px] md:h-[51px] font-poppins bg-[#00B207] text-white font-semibold rounded-full px-6 md:px-[40px] py-2 md:py-[16px] flex items-center justify-center gap-2 hover:bg-[#00B207]/90 transition duration-300 ease-in-out mx-auto md:mx-0">
              Shop Now
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-[#00B207]" : "bg-gray-400/50"
              )}
            />
          ))}
        </div>
      </div>

*/
import { type EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";
import {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
} from "@/assets/imgs/hero";

const OPTIONS: EmblaOptionsType = { loop: true };
const heroSlides = [
  {
    imageUrl: hero1,
    heading: "Welcome to Our Store",
    description: "Discover the best products curated just for you.",
    buttonText: "Go to Shop",
    buttonLink: "/shop",
  },
  {
    imageUrl: hero2,
    heading: "Summer Collection",
    description: "Fresh looks for the sunny season.",
    buttonText: "Explore Now",
    buttonLink: "/shop/summer",
  },
  {
    imageUrl: hero3,
    heading: "Organic Freshness",
    description: "Experience the taste of organic goodness.",
    buttonText: "Shop Organic",
    buttonLink: "/shop/organic",
  },
  {
    imageUrl: hero4,
    heading: "Limited Time Offer",
    description: "Grab your favorites before they're gone!",
    buttonText: "Shop Now",
    buttonLink: "/shop/limited-time",
  },
  {
    imageUrl: hero5,
    heading: "Healthy Living",
    description: "Embrace a healthier lifestyle with our products.",
    buttonText: "Learn More",
    buttonLink: "/shop/healthy-living",
  },
  {
    imageUrl: hero6,
    heading: "New Arrivals",
    description: "Check out the latest additions to our collection.",
    buttonText: "See New Arrivals",
    buttonLink: "/shop/new-arrivals",
  },
  {
    imageUrl: hero7,
    heading: "Welcome to Our Store",
    description: "Discover the best products curated just for you.",
    buttonText: "Go to Shop",
    buttonLink: "/shop",
  },
];

export default function Header() {
  return <EmblaCarousel slides={heroSlides} options={OPTIONS} />;
}
