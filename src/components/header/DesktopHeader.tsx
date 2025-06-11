import { Link } from "react-router-dom";
import logo from "@/assets/imgs/Logo.png";
import cart from "@/assets/svg/Rectangle.svg";
import heart from "@/assets/svg/Heart.svg";
import { AppRoutes } from "@/enums";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Menu, Search } from "lucide-react";
import BottomHeader from "./BottomHeader";
import UserMenu from "./UserMenu";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { openCart } from "@/app/features/Cart/cartSlice";
import useGetAllCart from "@/api/cart/useGetAllCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import toast from "react-hot-toast";
import { getAllWishlistItems } from "@/app/features/wishlist/wishlistSlice";
const DesktopHeader = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { items } = useAppSelector((state: RootState) => state.wishlist);
  // Get All Cart Items
  const { data } = useGetAllCart();
  const [numOfCartItems, setNumOfCartItems] = useState(0);

  useEffect(() => {
    const total =
      data?.data.products.reduce((sum, ele) => sum + ele.count, 0) || 0;
    setNumOfCartItems(total);
  }, [data?.data.products]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllWishlistItems());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div
      className="
      bg-white 
        "
    >
      <nav
        className="  
        flex 
        items-center 
        justify-between 
        p-4
        container
   "
      >
        <div>
          <Link to={AppRoutes.HOME}>
            <img
              className="max-w-[100px] md:max-w-[150px]"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex flex-[.7] items-center border shadow rounded-md focus-visible:ring-1">
          <Search size={21} className="ml-2" />
          <Input className="border-none shadow-none focus-visible:ring-0" />
          <Button className="bg-success-500 h-[100%] hover:bg-success- rounded-e-md rounded-s-none font-semibold">
            Search
          </Button>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  toast.error("Please login to view your wish list");
                }
              }}
              aria-label="Wish List"
              className="p-2 mr-2 relative focus:outline-none focus:ring-2 focus:ring-success-400 rounded"
            >
              <Link to={AppRoutes.WISH_LIST}>
                <img
                  className="h-[20px] w-[20px]"
                  src={heart}
                  alt="Wishlist Icon"
                />

                <span className="absolute top-[3px] right-[3px] bg-success-500 text-white text-[10px] font-semibold rounded-full px-1">
                  {isAuthenticated ? (items.length > 0 ? items.length : 0) : 0}
                </span>
              </Link>
            </button>
            <button
              onClick={() => {
                if (isAuthenticated) {
                  dispatch(openCart());
                } else {
                  toast.error("Please login to view your cart");
                }
              }}
              aria-label="Cart"
              className="p-2 mr-2 relative focus:outline-none focus:ring-2 focus:ring-success-400 rounded"
            >
              <img className="h-[20px] w-[20px]" src={cart} alt="Cart Icon" />
              <span className="absolute top-1 right-1 bg-success-500 text-white text-[10px] font-semibold rounded-full px-1">
                {isAuthenticated
                  ? numOfCartItems > 0
                    ? numOfCartItems
                    : 0
                  : 0}
              </span>
            </button>

            <UserMenu />

            <Menu size={20} className="md:hidden cursor-pointer" />
          </ul>
        </div>
      </nav>
      <BottomHeader />
    </div>
  );
};

export default DesktopHeader;
