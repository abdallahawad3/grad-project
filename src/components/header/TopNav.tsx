import { Link } from "react-router-dom";
import Location from "../../images/MapPin.png";
import { useState } from "react";

function TopNav() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.data?.role;

  const [currency, setCurrency] = useState<string>("USD");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };
  return (
    <div className=" xs:bg-gray-50 bg-primary-50">
      <div
        className="flex 
      flex-col 
      md:flex-row 
      justify-between 
      items-center 
  
      px-4 py-2 
      font-poppins 
      text-primary-600
      text-[12px]
      gap-2
      md:gap-0
      container
      "
      >
        <div
          className="
        flex
  
        items-center 
        gap-2 
        text-center"
        >
          <img src={Location} className="w-[12px]" />
          <span className="text-[11px] md:text-[12px] text-center">
            Store Location: Lincoln-344, Illinois, Chicago, USA
          </span>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-6">
          <select className="bg-transparent cursor-pointer text-xs md:text-sm">
            <option value="en">Eng</option>
            <option value="ar">Arb</option>
          </select>

          <select
            className="bg-transparent cursor-pointer text-xs md:text-sm"
            value={currency}
            onChange={handleChange}
          >
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
          </select>

          <div className="hidden md:block text-gray-500">|</div>

          <div className="flex items-center gap-1 text-xs md:text-sm">
            <Link to="/register">Sign Up</Link>
            <span className="mx-1">/</span>
            {!role ? (
              <Link to="/login">Sign In</Link>
            ) : role === "user" ? (
              <>User Role</>
            ) : (
              <>Admin Role</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
