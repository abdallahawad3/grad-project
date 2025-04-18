import { Leaf, TruckIcon, HeadphonesIcon, ShieldCheck } from "lucide-react";
import Farmer2 from "../../images/farmer2.png";
import BG from "../../images/BG.png";
import { FeatureItem } from "@/components/FeatureItem";

export default function FeaturesAbout() {
  return (
    <section className="w-full  bg-[#E5E5E5]">
      <div className="  mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="flex justify-center "
            style={{
              backgroundImage: `url(${BG})`,
            }}
          >
            <img
              src={Farmer2}
              alt="Farmer with vegetables"
              className=" max-h-[400px]  "
            />
          </div>
          <div className="space-y-3 container ">
            <h2 className="text-[56px]/[1.2] md:text-4xl ont-semibold tracking-tight text-[#002603]">
              100% Trusted Organic Food Store
            </h2>
            <p className="text-[16px]/[1.5] text-[#808080]">
              Our certified organic products are sourced from local farms and
              carefully inspected to ensure you receive only the best quality.
              We are committed to sustainable farming practices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem
                icon={<Leaf className="h-6 w-6 text-[#00B207]" />}
                title="100% Organic Food"
              />
              <FeatureItem
                icon={<HeadphonesIcon className="h-6 w-6 text-[#00B207]" />}
                title="Customer Feedback"
              />
              <FeatureItem
                icon={<TruckIcon className="h-6 w-6 text-[#00B207]" />}
                title="Free Shipping"
              />
              <FeatureItem
                icon={<ShieldCheck className="h-6 w-6 text-[#00B207]" />}
                title="100% Secure Payment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
