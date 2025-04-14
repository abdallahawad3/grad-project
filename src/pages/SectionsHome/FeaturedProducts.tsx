"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Heart, Eye } from "lucide-react";
import ImageProduct1 from "../../images/ProductImage1.png";
import ImageOrange from "../../images/ImageOrange.png";
import ImageProduct3 from "../../images/ProductImage3.png";
import ImageProduct4 from "../../images/ProductImage4.png";
import ImageProduct5 from "../../images/ProductImage5.png";
import { ShoppingCart } from "lucide-react";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Green Apple",
      price: 14.99,
      oldPrice: 20.99,
      discount: 50,
      image: ImageProduct1,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Surjapur Mango",
      price: 14.99,
      image: ImageOrange,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Red Tomatos",
      price: 14.99,
      image: ImageProduct3,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Fresh Cauliflower",
      price: 14.99,
      image: ImageProduct4,
      rating: 4.0,
    },
    {
      id: 5,
      name: "Green Lettuce",
      price: 14.99,
      image: ImageProduct5,
      rating: 4.1,
    },
  ];

  return (
    <section className="py-12 bg-[#EDF2EE] font-poppins">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Featured Products
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`w-full  hover:shadow-lg transition-shadow border border-[#e5e7eb] rounded-none ${
                index === 2 ? "border-[#00B207] border-2" : ""
              }`}
            >
              <CardHeader className="relative p-0">
                <div className="w-full  overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full"
                  />
                </div>

                <div className="absolute top-3 left-3 flex gap-2">
                  {product.discount && (
                    <span className="bg-[#EA4B48] text-white text-[14px] font-medium px-2 py-1 rounded-md">
                      sale {product.discount}%
                    </span>
                  )}
                </div>
                {index === 2 && (
                  <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full w-10 h-10 bg-white text-[#002603] hover:bg-[#00B207] hover:text-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full w-10 h-10 bg-white text-[#002603] hover:bg-[#00B207] hover:text-white"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              <div className="flex justify-between items-center p-4">
                <div className="flex-1">
                  <h3 className="font-normal text-[16px] text-[#2B572E] mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#002603] text-[18px]">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex text-[#FF8A00]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(product.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`p-4 rounded-full border ${
                    index === 2
                      ? "bg-[#00B207] text-white"
                      : "bg-[#DAE5DA] text-[#002603]"
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
