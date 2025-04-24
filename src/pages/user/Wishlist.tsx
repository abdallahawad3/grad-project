import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
const Wishlist = () => {
  return (
    <section className="container py-20">
      <Table className="border rounded-md">
        <TableCaption>Your Wishlist Items</TableCaption>
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
              <Badge variant={"error"} className="text-body-sm-400 font-[400]">
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
        </TableBody>
      </Table>
    </section>
  );
};

export default Wishlist;
