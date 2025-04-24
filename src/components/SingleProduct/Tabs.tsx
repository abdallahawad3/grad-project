import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./tabs.css";
import Divider from "../ui/Divider";
import CustomVideoPlayer from "./Custom";
import videoIcon1 from "../../assets/imgs/videoIcon.png";
import videoIcon2 from "../../assets/imgs/vi.png";
import { Fragment } from "react/jsx-runtime";
import { RatingComponent } from "../ui/Rating";
export function ProductTabs() {
  return (
    <Tabs defaultValue="descriptions" className="mx-auto bg-transparent">
      <TabsList className="w-full flex flex-wrap bg-transparent mb-10 md:mb-15">
        <TabsTrigger
          className="outline-none shadow-none border-none background-[#FCF7AE] text-[#0A947C] focus-visible:shadow-0  focus-visible:ring-0"
          value="descriptions"
        >
          Descriptions
        </TabsTrigger>
        <TabsTrigger
          className="outline-none shadow-none border-none background-[#FCF7AE] text-[#0A947C] focus-visible:shadow-0  focus-visible:ring-0"
          value="information"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          className="outline-none shadow-none border-none background-[#FCF7AE] text-[#0A947C] focus-visible:shadow-0  focus-visible:ring-0"
          value="customer"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>
      <Divider />
      <TabsContent value="descriptions">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500 mt-2">
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla
              facilisi. Nam scelerisque vitae justo a convallis. Morbi urna
              ipsum, placerat quis commodo quis, egestas elementum leo. Donec
              convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla
              elit.
            </p>
            <p className="text-sm text-gray-500 mt-5">
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra
              velit, pellentesque tristique neque mi eget nulla. Proin luctus
              elementum neque et pharetra.
            </p>
            <ul className="mt-5">
              <li className="relative mt-2 pl-6 text-body-md-400 text-gray-500 before:bg-[#0A947C] before:content-['✔'] before:absolute before:text-white before:size-[20px] before:flex before:items-center before:justify-center before:rounded-full   before:left-0 before:top-0 before:text-[10px]">
                100 g of fresh leaves provides.
              </li>
              <li className="relative mt-2 pl-6 text-body-md-400 text-gray-500 before:bg-[#0A947C] before:content-['✔'] before:absolute before:text-white before:size-[20px] before:flex before:items-center before:justify-center before:rounded-full   before:left-0 before:top-0 before:text-[10px]">
                Aliquam ac est at augue volutpat elementum.
              </li>
              <li className="relative mt-2 pl-6 text-body-md-400 text-gray-500 before:bg-[#0A947C] before:content-['✔'] before:absolute before:text-white before:size-[20px] before:flex before:items-center before:justify-center before:rounded-full   before:left-0 before:top-0 before:text-[10px]">
                Quisque nec enim eget sapien molestie.
              </li>
              <li className="relative mt-2 pl-6 text-body-md-400 text-gray-500 before:bg-[#0A947C] before:content-['✔'] before:absolute before:text-white before:size-[20px] before:flex before:items-center before:justify-center before:rounded-full   before:left-0 before:top-0 before:text-[10px]">
                Proin convallis odio volutpat finibus posuere.
              </li>
            </ul>
            <p className="text-body-md-400 text-gray-500 mt-5">
              Cras et diam maximus, accumsan sapien et, sollicitudin velit.
              Nulla blandit eros non turpis lobortis iaculis at ut massa.
            </p>
          </div>
          <div className="flex-1">
            <CustomVideoPlayer />
            <div className="p-[24px] border border-[#FCF7AE] rounded-[10px] flex flex-col md:flex-row gap-4 mt-4 ">
              <div className="flex items-center gap-3">
                <img
                  src={videoIcon1}
                  alt="videoIcon"
                  className="object-cover"
                />
                <div>
                  <h3 className="text-body-md-400 text-[14px] font-[600]">
                    64% Discount
                  </h3>
                  <p className="text-body-sm-400 text-gray-500">
                    Save your 64% money with us
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={videoIcon2}
                  alt="videoIcon"
                  className="object-cover"
                />
                <div>
                  <h3 className="text-body-md-400 text-[14px] font-[600]">
                    100% Organic
                  </h3>
                  <p className="text-body-sm-400 text-gray-500">
                    100% Organic Vegetables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="information">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <table className="w-full border-collapse text-left">
              <tbody>
                {productDetails.map((detail, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td className="text-left font-medium text-black">
                        {detail.label}:
                        <Divider />
                      </td>
                      <td className="text-body-md text-gray-500">
                        {detail.value}
                        <Divider />
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-1">
            <CustomVideoPlayer />
            <div className="p-[24px] border border-[#FCF7AE] rounded-[10px] flex flex-col md:flex-row gap-4 mt-4 ">
              <div className="flex items-center gap-3">
                <img
                  src={videoIcon1}
                  alt="videoIcon"
                  className="object-cover"
                />
                <div>
                  <h3 className="text-body-md-400 text-[14px] font-[600]">
                    64% Discount
                  </h3>
                  <p className="text-body-sm-400 text-gray-500">
                    Save your 64% money with us
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={videoIcon2}
                  alt="videoIcon"
                  className="object-cover"
                />
                <div>
                  <h3 className="text-body-md-400 text-[14px] font-[600]">
                    100% Organic
                  </h3>
                  <p className="text-body-sm-400 text-gray-500">
                    100% Organic Vegetables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="customer">
        <div className="max-w-[800px] mx-auto">
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  alt="customer"
                  className="size-[50px] object-cover rounded-full"
                />
                <div>
                  <h3>Kristin Watson</h3>
                  <RatingComponent isReadOnly={true} ratingVal={5} />
                </div>
              </div>
              <p className="text-body-sm-500 text-gray-500">2 min ago</p>
            </div>
            <p className="text-body-md-400 text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur, enim in facilisis tincidunt, enim nunc faucibus nisi,
              eget bibendum nunc nunc nec nisi.
            </p>
          </div>

          <Divider />
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  alt="customer"
                  className="size-[50px] object-cover rounded-full"
                />
                <div>
                  <h3>Kristin Watson</h3>
                  <RatingComponent isReadOnly={true} ratingVal={5} />
                </div>
              </div>
              <p className="text-body-sm-500 text-gray-500">2 min ago</p>
            </div>
            <p className="text-body-md-400 text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur, enim in facilisis tincidunt, enim nunc faucibus nisi,
              eget bibendum nunc nunc nec nisi.
            </p>
          </div>
          <Divider />
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  alt="customer"
                  className="size-[50px] object-cover rounded-full"
                />
                <div>
                  <h3>Kristin Watson</h3>
                  <RatingComponent isReadOnly={true} ratingVal={5} />
                </div>
              </div>
              <p className="text-body-sm-500 text-gray-500">2 min ago</p>
            </div>
            <p className="text-body-md-400 text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur, enim in facilisis tincidunt, enim nunc faucibus nisi,
              eget bibendum nunc nunc nec nisi.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

const productDetails = [
  { label: "Weight", value: "1 kg" },
  { label: "Dimensions", value: "20 × 30 × 40 cm" },
  { label: "Color", value: "Green" },
  { label: "Size", value: "Medium" },
  { label: "Material", value: "Cotton" },
  { label: "Brand", value: "Gucci" },
  { label: "Category", value: "Fashion" },
  { label: "Tags", value: "Fashion" },
];
