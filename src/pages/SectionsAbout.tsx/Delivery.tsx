import { ArrowRight } from "lucide-react";
import Delivey from "../../images/farmer3.png";
import { Button } from "@/components/ui/button";
import { DeliveryFeature } from "@/components/DeliveryFeature";

export default function Delivery() {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-poppins">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-[48px] md:text-4xl font-semibold tracking-tight text-gray-900">
              We Delivered, You Enjoy Your Order.
            </h2>
            <p className="text-[16px] text-[#666666] max-w-[600px]">
              Let our expert logistics team handle everything from pick to
              doorstep delivery. We ensure all items arrive fresh. We work with
              local farmers to ensure you receive the freshest produce possible,
              delivered right to your door.
            </p>

            <div className="space-y-3 mt-4">
              <DeliveryFeature text="Fast & secure delivery" />
              <DeliveryFeature text="Flexible & convenient delivery slots" />
              <DeliveryFeature text="Delivered in eco-friendly packaging" />
            </div>

            <Button className="w-full sm:w-[180px] h-[40px] md:h-[51px] font-poppins bg-[#00B207] text-white font-semibold rounded-full px-6 md:px-[40px] py-2 md:py-[16px] flex items-center justify-center gap-2 hover:bg-[#00B207]/90 transition duration-300 ease-in-out mx-auto md:mx-0">
              Shop Now
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
          <div className="flex justify-center">
            <img src={Delivey} className=" object-cover w-[895px] " />
          </div>
        </div>
      </div>
    </section>
  );
}
