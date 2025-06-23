/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "../ui/badge";
import Divider from "../ui/Divider";
import { RatingComponent } from "../ui/Rating";
import instgram from "../../assets/svg/instgram.svg";
import twitter from "../../assets/svg/twitter.svg";
import painterest from "../../assets/svg/painterest.svg";
import cart from "../../assets/svg/Rectangle.svg";
import type { IProduct } from "@/interface";
import { useAppDispatch } from "@/app/hooks";
import { addToCart, removeFromCart } from "@/app/features/Cart/cartSlice";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "@/app/features/wishlist/wishlistSlice";
import { Heart } from "lucide-react";
import Loading from "@/miscellaneous/Loading";
interface DetailsProps {
  product: IProduct | null;
  cartItems?: any;
  isAuthenticated?: boolean;
  items: any[];
  wishlistLoading: boolean;
  cartLoading: boolean;
}
const Details = ({
  product,
  cartItems,
  isAuthenticated,
  items,
  cartLoading,
  wishlistLoading,
}: DetailsProps) => {
  const dispatch = useAppDispatch();

  if (!product) return;
  const inCart = cartItems.products.find(
    (item: any) => item.product._id === product._id
  );

  console.log(inCart);

  return (
    <div>
      <div>
        <div className="flex gap-[10px] items-center">
          <h2 className="text-body-lg-500 md:text-body-xl-600 display-5">
            Chinese Cabbage
          </h2>
          <Badge className="bg-[#20B52633] leading-3 py-1  px-2 rounded-[4px] text-[#0A947C] font-thin hover:bg-[#20B52633] hover:text-[#20a48e]">
            In Stock
          </Badge>
        </div>
        <div className="flex gap-5 items-center mt-2">
          <div className="flex gap-3 items-center">
            <RatingComponent
              isReadOnly={true}
              ratingVal={product.ratingsAverage || 1}
            />
            <p>
              <span className="text-body-sm-400 text-gray-600 underline">
                {product.ratingsQuantity} Review
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="mt-4 flex gap-2 items-center">
            <span className="text-body-xl-500 line-through text-gray-400">
              ${product.price}
            </span>
            {product.priceAfterDiscount && (
              <>
                <strong className="text-body-xl-500 !text-[24px] font-[600] text-[#0A947C]">
                  ${product.priceAfterDiscount}
                </strong>
                <Badge className="bg-[#EA4B481A] leading-3 py-1  px-2 rounded-[30px] text-primary-50 font-thin hover:bg-[#EA4B481A] hover:text-primary-50">
                  {(product.priceAfterDiscount / product.price) * 100} % Off
                </Badge>
              </>
            )}
          </p>
        </div>
      </div>
      <Divider dividerColor="#FCF7AE" />
      <div className="flex flex-col gap-4">
        {/* Top */}
        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          <div className="flex flex-1 gap-2 items-center">
            <p>Brand:</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="flex-1">Share item:</p>
            <div className="flex gap-2 justify-content-end items-center">
              <div className="group rounded-full transition-colors duration-300 hover:bg-[#0A947C]">
                <img
                  className="cursor-pointer size-[40px] text-black group-hover:invert group-hover:brightness-0 group-hover:filter"
                  src={instgram}
                  alt="Pinterest"
                />
              </div>

              <div className="group rounded-full transition-colors duration-300 hover:bg-[#0A947C]">
                <img
                  className="cursor-pointer size-[40px] text-black group-hover:invert group-hover:brightness-0 group-hover:filter"
                  src={twitter}
                  alt="Pinterest"
                />
              </div>
              <div className="group rounded-full transition-colors duration-300 hover:bg-[#0A947C]">
                <img
                  className="cursor-pointer size-[40px] text-black group-hover:invert group-hover:brightness-0 group-hover:filter"
                  src={painterest}
                  alt="Pinterest"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-body-sm-400 text-gray-600 mt-3 max-w-[90%]">
          {product.description || ""}
        </p>
      </div>
      <Divider />
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        {inCart && isAuthenticated ? (
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2  items-center justify-between p-2 border-2 border-[#FCF7AE] h-[40px] rounded-full">
                <button
                  onClick={() => {
                    dispatch(addToCart({ productId: product._id }));
                  }}
                  className="bg-[#FCF7AE] size-[30px] block rounded-full"
                >
                  {cartLoading ? <Loading /> : "+"}{" "}
                </button>
                <span>{inCart.count}</span>
                <button
                  disabled={cartLoading}
                  onClick={() => {
                    dispatch(removeFromCart({ productId: inCart._id }));
                  }}
                  className="bg-[#FCF7AE] size-[30px] block rounded-full "
                >
                  {cartLoading ? <Loading /> : "-"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-[.75] ">
              <button
                disabled={cartLoading}
                onClick={() => {
                  if (isAuthenticated) {
                    dispatch(addToCart({ productId: product._id }));
                  } else {
                    toast.error("Please login to add items to cart");
                  }
                }}
                className="w-full bg-[#0A947C] text-white h-[40px] rounded-full flex items-center justify-center gap-2"
              >
                <span>Add To Cart</span>
                <span className="group rounded-full">
                  <img
                    className="size-[20px] invert group-hover:brightness-0 group-hover:filter"
                    src={cart}
                    alt="Cart"
                  />
                </span>
              </button>
            </div>
          </>
        )}

        <div className="flex-[.10]">
          <Button
            disabled={wishlistLoading}
            onClick={() => {
              if (isAuthenticated) {
                if (items.some((item) => item._id === product._id)) {
                  dispatch(removeProductFromWishlist(product._id));
                  toast.success("Product removed from wishlist successfully");
                } else {
                  dispatch(addProductToWishlist(product._id));
                  toast.success("Product added to wishlist successfully");
                }
              } else {
                toast.error("Please login to add items to wishlist");
              }
            }}
            className=" w-12 h-12 border-none hover:bg-white relative focus:outline-none focus:ring-2 focus:ring-success-400 bg-white border-gray-50 rounded-full"
            aria-label="Add to Wishlist"
            style={{
              backgroundColor: items.some((item) => item._id === product._id)
                ? "#FF0000"
                : "#FFFFFF",
            }}
          >
            {items.some((item) => item._id === product._id) ? (
              wishlistLoading ? (
                <Loading />
              ) : (
                <Heart size={20} fill="#FF0000" />
              )
            ) : wishlistLoading ? (
              <Loading />
            ) : (
              <Heart size={20} color="#000" />
            )}
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Details;
