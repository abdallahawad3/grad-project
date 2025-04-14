import ImageBanner1 from "../../images/BannerImage1.png";
import ImageBanner2 from "../../images/BannerImage2.png";
import ImageBanner3 from "../../images/BannerImage3.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 font-poppins ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative w-full aspect-[424/255]  rounded-xl overflow-hidden shadow-lg">
            <img
              src={ImageBanner1}
              alt="Fresh Cow Milk"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="relative text-white w-[183px]">
                <h3 className="text-[32px] font-semibold sm:text-2xl mb-2">
                  100% Fresh Cow Milk
                </h3>
                <p className="text-[14px] font-normal  sm:text-base opacity-90">
                  Starting at{" "}
                  <span className="font-medium text-[20px]">$14.99</span>
                </p>
                <Button className="mt-4 w-full sm:w-[180px] h-[40px] md:h-[51px] font-poppins bg-[#fff] text-[#00B207] font-semibold rounded-full px-6 md:px-[40px] py-2 md:py-[16px] flex items-center justify-center gap-2 hover:bg-[#00B207]/90 hover:text-[#fff]/90 transition duration-300 ease-in-out">
                  Shop Now
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full aspect-[424/255] rounded-xl overflow-hidden shadow-lg">
            <img
              src={ImageBanner2}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="relative text-black w-[183px] ml-auto">
                <p className="text-[14px] font-normal sm:text-base  text-left">
                  Drink Sale
                </p>

                <h3 className="text-[32px] font-semibold sm:text-2xl mb-2 text-left">
                  Water & Soft Drink
                </h3>

                <div className="flex justify-end">
                  {" "}
                  <Button className="mt-4 w-full sm:w-[180px] h-[40px] md:h-[51px] font-poppins bg-[#fff] text-[#00B207] font-semibold rounded-full px-6 md:px-[40px] py-2 md:py-[16px] flex items-center justify-center gap-2 hover:bg-[#00B207]/90 hover:text-[#fff]/90 transition duration-300 ease-in-out">
                    Shop Now
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full aspect-[424/255] rounded-xl overflow-hidden shadow-lg">
            <img
              src={ImageBanner3}
              alt="Organic Meat"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="relative text-black w-[183px]">
                <p className="text-[14px] font-normal  sm:text-base opacity-90">
                  100% Organic
                </p>
                <h3 className="text-[32px] font-semibold sm:text-2xl mb-2">
                  100% Fresh Cow Milk
                </h3>

                <Button className="mt-4 w-full sm:w-[180px] h-[40px] md:h-[51px] font-poppins bg-[#fff] text-[#00B207] font-semibold rounded-full px-6 md:px-[40px] py-2 md:py-[16px] flex items-center justify-center gap-2 hover:bg-[#00B207]/90 hover:text-[#fff]/90 transition duration-300 ease-in-out">
                  Shop Now
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
