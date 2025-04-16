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
import { useAppDispatch } from "@/app/hooks";
import { openCart } from "@/app/features/Cart/cartSlice";
const DesktopHeader = () => {
  const dispatch = useAppDispatch();

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
          <img
            className="max-w-[100px] md:max-w-[150px]"
            src={logo}
            alt="Logo"
          />
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
              aria-label="Wish List"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-success-400 rounded"
            >
              <Link to={AppRoutes.WISH_LIST}>
                <img
                  className="h-[20px] w-[20px]"
                  src={heart}
                  alt="Wishlist Icon"
                />
              </Link>
            </button>
            <button
              onClick={() => {
                dispatch(openCart());
              }}
              aria-label="Cart"
              className="p-2 mr-2 relative focus:outline-none focus:ring-2 focus:ring-success-400 rounded"
            >
              <img className="h-[20px] w-[20px]" src={cart} alt="Cart Icon" />
              <span className="absolute top-1 right-1 bg-success-500 text-white text-[10px] font-semibold rounded-full px-1">
                2
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
