import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MiddleNav = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white shadow-md font-poppins text-sm">
      <div className="font-poppins text-[32px] text-gray-800 text-center md:text-left">
        Ecobazar
      </div>
      <div className="flex flex-1 max-w-md mx-6 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="🔎 Search"
          className="flex-1 border border-gray-300 rounded-l px-[16px] py-[10px] text-sm focus:outline-none"
        />
        <button className="bg-[#00B207] text-white px-4 rounded-r ">
          Search
        </button>
      </div>
      <div className="flex items-center gap-5 text-gray-700 mt-2 md:mt-0">
        <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <FontAwesomeIcon icon={faShoppingCart} className="text-lg mb-1" />
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
