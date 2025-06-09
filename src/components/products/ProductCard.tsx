// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Heart, Eye } from "lucide-react";

import { Eye, Heart, ShoppingCart } from "lucide-react";

import { Button } from "../ui/button";
import type { IProduct } from "@/interface";
import { RatingComponent } from "../ui/Rating";
import { Link } from "react-router-dom";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <div
      className={`
    bg-[#FFFFFF]
      border-[1px]
    border-[#E6E6E6]
      rounded-[8px] 
      overflow-hidden 
      relative 
      group 
      p-5 
      hover:border-[1px]
    hover:border-success-600 
      hover:shadow-product
      
      `}
    >
      <div
        className={`
          
        `}
      >
        {/* For Image */}
        <div>
          <img
            src={product.imageCover}
            alt="Product Image"
            className="w-full h-[245px] object-cover"
          />
        </div>
        {/* For Content */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-700 text-body-lg-400">{product.title}</h3>
            <p className="text-gray-900 text-body-xl-500">${product.price}</p>
            <div className="flex gap-[.5px] items-center mt-2">
              <RatingComponent isReadOnly ratingVal={4} />
            </div>
          </div>
          <Button
            className={` 
              w-12 h-12 
              border-none 
              bg-gray-50 
              text-gray-900
              group-hover:bg-success-400 
              group-hover:text-white
              relative 
              focus:outline-none 
              focus:ring-2 
              focus:ring-success-400 
              border-gray-50 
              rounded-full
              cursor-pointer
                `}
            aria-label="Add to Wishlist"
          >
            <ShoppingCart size={20} />
          </Button>
        </div>

        {/* Overlay */}
        <div
          className={`
          absolute 
          top-4 
          right-4 
          opacity-0 
          group-hover:opacity-50 
          transition-opacity 
          duration-300 
          ease-in-out 
          flex 
          flex-col
          justify-start
          `}
        >
          <div className="flex flex-col gap-4">
            <Button
              className=" w-12 h-12 border-none hover:bg-white relative focus:outline-none focus:ring-2 focus:ring-success-400 bg-white border-gray-50 rounded-full"
              aria-label="Add to Wishlist"
            >
              <Heart size={20} color="#000" />
            </Button>
            <Button
              className="w-12 h-12 border-none hover:bg-white relative focus:outline-none focus:ring-2 focus:ring-success-400 bg-white border-gray-50 rounded-full"
              aria-label="Show Details Of Product"
            >
              <Link to={`/products/${product._id}`}>
                <Eye size={20} color="#000" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
