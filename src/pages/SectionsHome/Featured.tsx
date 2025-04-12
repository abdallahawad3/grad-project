"use client";

import { Leaf, Truck, ShieldCheck, Percent } from "lucide-react"; // Example icons

export default function Featured() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Organic Products",
      description: "100% natural and organic ingredients",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Free shipping on all orders",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      title: "Quality Guarantee",
      description: "Premium quality products",
    },
    {
      icon: <Percent className="w-8 h-8 text-red-600" />,
      title: "Special Offers",
      description: "Regular discounts and deals",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h2>
              <span className="text-gray-600">{feature.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
