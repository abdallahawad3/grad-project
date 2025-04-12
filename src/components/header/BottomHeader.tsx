import { Link, useLocation } from "react-router-dom";
import phone from "@/assets/svg/PhoneCall1.svg";
import { HomePages } from "@/data";
import AllCategoryMenu from "./AllCategoryMenu";
const BottomHeader = () => {
  const location = useLocation();
  const currenPage = location.pathname.split("/")[1].toLocaleLowerCase();

  console.log(currenPage);
  return (
    <div className="bg-gray-50 hidden md:block">
      <div className="container">
        <ul className="flex gap-4 items-center justify-content-between ">
          <div>
            <AllCategoryMenu />
          </div>
          <ul className="flex  flex-1 gap-4">
            {HomePages.map((page) => (
              <li key={page.title}>
                <Link
                  className={`
            ${
              `/${currenPage}` == page.PageURL.toLocaleLowerCase()
                ? "text-success-300 "
                : "text-gray-500"
            }

            font-medium
            `}
                  to={page.PageURL}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <button
              aria-label="Phone Call"
              className="p-2 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-success-400 rounded"
            >
              <img className="h-[20px] w-[20px]" src={phone} />
              <span>(219) 555-0114</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
