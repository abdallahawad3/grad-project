// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import vectorLogo from "../../images/Vector.png";
import ShopPage from "../../images/Cart.png";
import Heart from "../../images/Heart.png";
import Search from "../../images/Search.png";
const MiddleNav = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white shadow-md font-poppins text-sm">
      <div className="flex items-center gap-2 font-poppins text-[32px] text-gray-800 text-center md:text-left">
        <img src={vectorLogo} alt="logo" className="w-8 h-8" />
        <span className="font-poppins font-medium">Ecobazar</span>
      </div>

      <div className="flex flex-1 max-w-md mx-6 mt-2 md:mt-0 relative">
        <img
          src={Search}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800"
        />

        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-3 py-[10px] border border-gray-300 rounded-l text-sm focus:outline-none"
        />
        <button className="bg-[#00B207] text-white px-4 rounded-r font-semibold text-[14px]">
          Search
        </button>
      </div>

      <div className="flex items-center gap-5 text-gray-700 mt-2 md:mt-0">
        <img src={Heart} className="cursor-pointer w-[22px]" />

        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <img src={ShopPage} className="text-lg mb-1 w-[22px]" />
          <div className="flex flex-col items-center">
            <span className="font-normal text-[14px]">Shopping Cart:</span>
            <span className="text-black font-medium text-[15px]">$57.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
