import { Badge } from "../ui/badge";
import Divider from "../ui/Divider";
import { RatingComponent } from "../ui/Rating";
import brand from "../../assets/imgs/singleProduct1.jpg";
import instgram from "../../assets/svg/instgram.svg";
import twitter from "../../assets/svg/twitter.svg";
import painterest from "../../assets/svg/painterest.svg";
import cart from "../../assets/svg/Rectangle.svg";
import heart from "../../assets/svg/heart.svg";
const Details = () => {
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
            <RatingComponent isReadOnly={true} ratingVal={1.75} />
            <p>
              <span className="text-body-sm-400 text-gray-600 underline">
                1.75 Review
              </span>
            </p>
          </div>
          <div className="size-[5px] rounded-full bg-gray-300" />
          <p className="text-body-sm-400 text-gray-600 underline">4 Sold</p>
        </div>
        <div>
          <p className="mt-4 flex gap-2 items-center">
            <span className="text-body-xl-500 line-through text-gray-400">
              $48.00
            </span>
            <strong className="text-body-xl-500 !text-[24px] font-[600] text-[#0A947C]">
              $17.28
            </strong>
            <Badge className="bg-[#EA4B481A] leading-3 py-1  px-2 rounded-[30px] text-primary-50 font-thin hover:bg-[#EA4B481A] hover:text-primary-50">
              64% Off
            </Badge>
          </p>
        </div>
      </div>
      <Divider dividerColor="#FCF7AE" />
      <div className="flex flex-col gap-4">
        {/* Top */}
        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          <div className="flex flex-1 gap-2 items-center">
            <p>Brand:</p>
            <img
              className="size-[50px] rounded-md object-fit-contain border-[.8px] border-[#FCF7AE] p-[.5px] overflow-hidden"
              src={brand}
              alt="Brand Name"
            />
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
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
          ultrices et ipsum. Nulla varius magna a consequat pulvinar.
        </p>
      </div>
      <Divider />
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <div className="flex-[.18]">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2  items-center justify-between p-2 border border-[#FCF7AE] h-[40px] rounded-full">
              <button className="bg-[#FCF7AE] size-[30px] block rounded-full">
                +
              </button>
              <span>1</span>
              <button className="bg-[#FCF7AE] size-[30px] block rounded-full ">
                -
              </button>
            </div>
          </div>
        </div>
        <div className="flex-[.75] ">
          <button className="w-full bg-[#0A947C] text-white h-[40px] rounded-full flex items-center justify-center gap-2">
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
        <div className="flex-[.10]">
          <button className="w-full bg-[#20B5261A] text-[#0A947C] h-[40px] size-[40px] rounded-full flex items-center justify-center gap-2">
            <span>
              <img
                className="size-[20px] invert-[#0A947C]"
                src={heart}
                alt="Cart"
              />
            </span>
          </button>
        </div>
      </div>
      <Divider />
      <div>
        <p className="flex items-center gap-2">
          <span className="text-body-md-500">Category:</span>
          <span className="text-body-sm-400 text-gray-600 underline underline-offset-4">
            Vegetables
          </span>
        </p>
        <p className="flex items-center gap-2 mt-2">
          <span className="text-body-md-500">Tags:</span>
          <span className="text-body-sm-400 text-gray-600 underline underline-offset-4">
            Vegetables, Fruits, Organic
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;
