import ImageBanner1 from "../../images/BannerImage1.png";
import ImageBanner2 from "../../images/BannerImage2.png";
import ImageBanner3 from "../../images/BannerImage3.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative w-full aspect-[424/255] rounded-xl overflow-hidden shadow-md">
            <img
              src={ImageBanner1}
              alt="Fresh Cow Milk"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="text-white w-full max-w-[220px]">
                <h3 className="text-2xl font-semibold mb-2">
                  100% Fresh Cow Milk
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Starting at{" "}
                  <span className="font-medium text-lg">$14.99</span>
                </p>
                <Button className="w-full bg-white text-[#00B207] hover:bg-[#00B207] hover:text-white rounded-full px-6 py-2 transition">
                  <Link className="flex items-center" to={"/products"}>
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full aspect-[424/255] rounded-xl overflow-hidden shadow-md">
            <img
              src={ImageBanner2}
              alt="Water & Soft Drink"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="text-black w-full max-w-[220px] ml-auto text-end">
                <p className="text-sm mb-1">Drink Sale</p>
                <h3 className="text-2xl font-semibold mb-4">
                  Water & Soft Drink
                </h3>
                <Button className="w-full bg-white text-[#00B207] hover:bg-[#00B207] hover:text-white rounded-full px-6 py-2 transition">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full aspect-[424/255] rounded-xl overflow-hidden shadow-md">
            <img
              src={ImageBanner3}
              alt="Organic Meat"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="text-black w-full max-w-[220px]">
                <p className="text-sm opacity-90 mb-1">100% Organic</p>
                <h3 className="text-2xl font-semibold mb-4">
                  100% Fresh Cow Milk
                </h3>
                <Button className="w-full bg-white text-[#00B207] hover:bg-[#00B207] hover:text-white rounded-full px-6 py-2 transition">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
