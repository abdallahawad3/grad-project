import { Check } from "lucide-react";

export const DeliveryFeature = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Check className="h-5 w-5 text-[#2C742F]" />
      <span className="text-[#666666]">{text}</span>
    </div>
  );
};
