"use client";

import { Button } from "@/components/ui/button";
import ImageDeal1 from "../../images/ImageDetail1.png";
import ImageDeal2 from "../../images/ImageDetail2.png";
import { ArrowRight } from "lucide-react";
export default function BestDeal() {
  const timeLeft = {
    days: "00",
    hours: 12,
    minutes: 30,
    seconds: 45,
  };

  return (
    <section className="bg-[#EDF2EE] py-12 font-poppins">
      <div className="container  flex flex-col-reverse md:flex-row items-center gap-10 px-4">
        <div className="w-full md:w-1/2">
          <img
            src={ImageDeal1}
            alt="Promo"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 text-center ">
          <p className="text-[#00B207] text-[16px] font-medium uppercase tracking-wide">
            Best Deals
          </p>
          <h1 className="text-[40px]/[1.2]  font-semibold text-[##002603]">
            Our Special Products Deal of the Month
          </h1>

          <div className="flex justify-center gap-2 text-center mt-4">
            {Object.entries(timeLeft).map(([unit, value], index, array) => (
              <div key={unit} className="flex items-center gap-2">
                <div className="flex flex-col items-center bg-[white] p-2 rounded-lg  w-[70px] sm:w-[96px]">
                  <div className="text-[32px] font-normal text-[#00B207]">
                    {value}
                  </div>
                  <div className="text-[14px] font-normal text-gray-500 capitalize">
                    {unit}
                  </div>
                </div>
                {index < array.length - 1 && (
                  <span className="text-[20px] flex justify-center items-center">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          <Button className="sm:w-[180px] h-[40px] md:h-[51px] mt-6 rounded-full bg-[#00B207] hover:bg-[#00B207]/90 text-white px-6 py-3">
            Shop Now
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={ImageDeal2} alt="Promo" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
