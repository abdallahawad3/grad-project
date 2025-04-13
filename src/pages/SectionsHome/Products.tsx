import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart, Eye } from "lucide-react";

import ImageProduct1 from "../../images/ProductImage1.png";
import ImageProduct2 from "../../images/ProductImage2.png";
import ImageProduct3 from "../../images/ProductImage3.png";
import ImageProduct4 from "../../images/ProductImage4.png";
import ImageProduct5 from "../../images/ProductImage5.png";
import ImageProduct6 from "../../images/ProductImage6.png";
import ImageProduct7 from "../../images/ProductImage7.png";
import ImageProduct8 from "../../images/ProductImage8.png";
import { ShoppingCart } from "lucide-react";

export function Products() {
  const categories = [
    { name: "All", active: true },
    { name: "Vegetables", active: false },
    { name: "Fruit", active: false },
    { name: "Meat & Fish", active: false },
    { name: "View All", active: false },
  ];

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
      image: ImageProduct2,
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
    {
      id: 6,
      name: "Eggplant",
      price: 14.99,
      image: ImageProduct6,
      rating: 4.3,
    },
    {
      id: 7,
      name: "Green Chilli",
      price: 14.99,
      image: ImageProduct7,
      rating: 4.6,
    },
    {
      id: 8,
      name: "Eggplant",
      price: 14.99,
      image: ImageProduct8,
      rating: 4.4,
    },
  ];
  return (
    <section className="py-12 bg-[#EDF2EE] mx-auto px-4 font-poppins">
      <div className="container">
        <div className="text-center mt-10 mb-5">
          <h1 className="text-[40px] font-semibold tracking-tight sm:text-4xl">
            Introducing Our Products
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mb-10">
          {categories.map((category, index) => (
            <div key={category.name} className="flex items-center">
              <Button
                variant="ghost"
                className={`
          bg-[#EDF2EE]
          ${
            index === 0
              ? "text-[#00B207] font-medium "
              : "text-gray-500 font-normal"
          }
          rounded-none
          px-6
          hover:bg-[#EDF2EE]
          hover:text-[#00B207]
          relative
          whitespace-nowrap
        `}
              >
                {category.name}
                {index === 0 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-24px)] h-[2px] bg-[#00B207]" />
                )}
              </Button>
              {index < categories.length - 1 && (
                <div className="h-4 w-px bg-gray-300 mx-2" />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`hover:shadow-lg transition-shadow border-r border-b border-[#e5e7eb] rounded-none ${
                index === 0 ? "border-[#00B207] border-2" : ""
              }`}
            >
              <CardHeader className="relative p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="absolute top-3 left-3 flex gap-2">
                  {product.discount && (
                    <span className="bg-[#EA4B48] text-white text-[14px] font-medium px-2 py-1 rounded-md">
                      sale {product.discount}%
                    </span>
                  )}
                </div>
                {index === 0 && (
                  <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full w-10 h-10 bg-white text-[##002603] hover:bg-[#00B207] hover:text-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full w-10 h-10 bg-white text-[##002603] hover:bg-[#00B207] hover:text-white"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              <div className="flex justify-between items-center">
                <CardContent className="p-4">
                  <h3 className="font-normal text-[16px]/[1.5] text-[#2B572E] mb-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#002603] text-[18px]/[1.5]">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FF8A00]">
                          {i < Math.floor(product.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div
                  className={`p-[16px] mr-[16px] rounded-full border ${
                    index === 0
                      ? "bg-[#00B207] text-[white]"
                      : "bg-[##DAE5DA]  text-[#002603]"
                  }`}
                >
                  <ShoppingCart />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
