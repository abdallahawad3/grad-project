"use client";

import { Truck, Headset, ShoppingBag, Package } from "lucide-react";

export default function Featured() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Free Shipping",
      description: "Free shipping with discount",
    },
    {
      icon: <Headset className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Great Support 24/7",
      description: "Instant access to Contact",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "100% Secure Payment",
      description: "We ensure your money is safe",
    },
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Money-Back Guarantee",
      description: "30 days money-back guarantee",
    },
  ];

  return (
    <section className="font-poppins px-4 sm:px-0 z-50 ">
      <div className="container mx-auto overflow-hidden rounded-md  relative translate-y-[40%] sm:translate-y-[50%]">
        <div className="shadow-sm border border-[#DAE5DA] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DAE5DA]">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
      p-4 sm:p-6 cursor-pointer transition-all duration-300
      ${
        index === 0
          ? "bg-[#00B207] text-white"
          : "bg-white text-gray-800 hover:bg-[#00B207] hover:text-white"
      } 
      ${index === 0 ? "sm:rounded-tl-lg sm:rounded-bl-lg" : ""}
      ${
        index === features.length - 1 ? "sm:rounded-tr-lg sm:rounded-br-lg" : ""
      }
    `}
              >
                <div
                  className={`
    flex border rounded-full p-3 sm:p-4 w-fit mb-3 sm:mb-4
    ${
      index === 0
        ? "bg-white text-[#00B207] border-white"
        : "hover:bg-white hover:text-[#00B207] hover:border-white"
    }
    mx-auto sm:mx-0
  `}
                >
                  {feature.icon}
                </div>

                <h2 className="font-semibold text-sm sm:text-base sm:text-[18px] mb-1 sm:mb-2 text-center sm:text-left">
                  {feature.title}
                </h2>
                <span className="text-xs sm:text-[14px] font-normal block text-center sm:text-left">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
