import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/Divider";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-[.75] ">
          <Table className="border !rounded">
            {/* <TableCaption>Your Wishlist Items</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>price</TableHead>
                <TableHead>Stock Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="py-10">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                      alt="product"
                      className="size-[50px] object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-body-md-500">Product Name</h2>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <span className="text-body-md-500">$250.00</span>
                    <span className="text-body-sm-500 text-gray-500 line-through">
                      $300.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={"success"}
                    className="text-body-sm-400 font-[400]"
                  >
                    In Stock
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center gap-2 justify-end">
                  <Button
                    variant={"myButton"}
                    className="rounded-full py-[14px] px-[32px]"
                  >
                    Add To Cart
                  </Button>
                  <Button
                    className="bg-transparent hover:bg-transparent shadow-none border rounded-full"
                    size={"icon"}
                  >
                    <X size={20} className="text-black" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className="py-10">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                      alt="product"
                      className="size-[50px] object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-body-md-500">Product Name</h2>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <span className="text-body-md-500">$250.00</span>
                    <span className="text-body-sm-500 text-gray-500 line-through">
                      $300.00
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={"error"}
                    className="text-body-sm-400 font-[400]"
                  >
                    Out of stock
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center gap-2 justify-end">
                  <Button
                    variant={"myButton"}
                    className="rounded-full py-[14px] px-[32px] cursor-not-allowed"
                    disabled
                  >
                    Add To Cart
                  </Button>
                  <Button
                    className="bg-transparent hover:bg-transparent shadow-none border rounded-full"
                    size={"icon"}
                  >
                    <X size={20} className="text-black" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4}>
                  <div className="py-5 px-2">
                    <Button
                      variant={"outline"}
                      className="mt-4 bg-gray-50 text-gray-700 shadow-none hover:bg-gray-50 hover:text-gray-700 py-[14px] px-[30px] rounded-full"
                    >
                      <Link to={"/products"}>Go To Shopping</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex items-center justify-between mt-4 gap-4 border rounded p-5">
            <p>Coupon Code:</p>
            <form className="flex-1 flex items-center gap-2 border rounded-full">
              <Input
                type="text"
                placeholder="Enter your coupon code"
                className="border-none outline-none shadow-none focus-visible:ring-0 w-full placeholder:!text-gray-500"
              />
              <Button
                variant={"myButton"}
                className="rounded-full py-[25px] px-[50px]"
                type="submit"
              >
                Apply Coupon
              </Button>
            </form>
          </div>
        </div>

        <div className="flex-[.25] border rounded h-fit p-4">
          <h3 className="text-body-md-500 font-[600] mb-4">Cart Total</h3>
          <Divider />
          <p className="text-body-sm-500 text-gray-500 mt-4 flex items-center justify-between">
            Subtotal: <span className="text-body-md-500">$250.00</span>
          </p>
          <Divider />
          <p className="text-body-sm-500 text-gray-500 mt-4 flex items-center justify-between">
            Shipping: <span className="text-body-md-500">$250.00</span>
          </p>
          <Divider />
          <p className="text-body-sm-500 text-gray-500 mt-4 flex items-center justify-between">
            Total:{" "}
            <strong className="text-body-md-500 text-black">$250.00</strong>
          </p>
          <Button
            variant={"myButton"}
            className=" mt-4 rounded-full py-[14px] px-[32px] w-full"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
