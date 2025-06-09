// import { AppSidebar } from "@/components/sidebar/ProductsSidebar";
import filterIcon from "@/assets/imgs/Filter icon.png";
import ProductList from "@/components/products/ProductList";
import ProductsSidebar from "@/components/sidebar/ProductsSidebar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Contact from "./SectionsHome/Contact";
import useGetAllProducts from "@/api/products/useGetAllProducts";

const ShopPage = () => {
  const { data: productData } = useGetAllProducts();
  const products = productData?.data ?? [];
  return (
    // <main className="flex flex-col gap-4 p-4 md:flex-row md:gap-8">
    <main className="container py-24">
      <div className="mb-5 flex gap-4 md:flex-row md:gap-8">
        <Button className="py-[20px] flex-[.28] px-[32px] text-body-sm-500 bg-success-500 text-white hover:bg-success-600 rounded-full">
          Filter
          <img src={filterIcon} alt="Filter Icon" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center justify-content-between gap-2">
            <div className="flex items-center gap-2">
              <p className="text-body-sm-400 text-gray-700">Sort By:</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort By</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p className="flex-1 text-end text-body-sm-400 text-gray-800">
              <strong>(50)</strong> The Result
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:flex-row md:gap-8">
        <ProductsSidebar />
        <section>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <ProductList products={products} />
          </div>
        </section>
      </div>
      <div className="pb-2 pt-24">
        <Contact />
      </div>
    </main>
    // </main>
  );
};

export default ShopPage;
