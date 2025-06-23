import {
  addToCart,
  applyCoupon,
  getAllCartItems,
  removeFromCart,
} from "@/app/features/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/Divider";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const {
    data,
    totalAmount,
    priceAfterCoupon,
    loading,
    coupon: code,
  } = useAppSelector((state: RootState) => state.cart);
  const [coupon, setCoupon] = useState(code || "");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch]);
  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-[.75] ">
          <Table className="border !rounded">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>price</TableHead>
                <TableHead>Stock Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.products.length > 0 ? (
                data.products.map((item) => (
                  <TableRow key={item._id} className="py-10">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={`http://127.0.0.1:8000/products/${item.product.imageCover}`}
                          alt={item.product.title}
                          className="size-[50px] object-cover rounded-full"
                        />
                        <div className="flex flex-col">
                          <h2 className="text-body-md-500">
                            {item.product.title}
                          </h2>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <span className="text-body-md-500">${item.price}</span>
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
                      <div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2 items-center justify-between p-2 border border-[#FCF7AE] h-[40px] rounded-full">
                            <button
                              disabled={loading}
                              onClick={() => {
                                dispatch(
                                  addToCart({ productId: item.product._id })
                                );
                              }}
                              className="bg-[#FCF7AE] size-[30px] block rounded-full"
                            >
                              +
                            </button>
                            <span>{item.count}</span>
                            <button
                              disabled={loading}
                              onClick={() => {
                                dispatch(
                                  removeFromCart({ productId: item._id })
                                );
                              }}
                              className="bg-[#FCF7AE] size-[30px] block rounded-full"
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                  </TableCell>
                </TableRow>
              )}
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
                name="coupon"
                autoComplete="off"
                autoFocus
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                type="text"
                placeholder="Enter your coupon code"
                className="border-none outline-none shadow-none focus-visible:ring-0 w-full placeholder:!text-gray-500"
              />
              <Button
                disabled={loading || !coupon}
                variant={"myButton"}
                className="rounded-full py-[25px] px-[50px]"
                type="submit"
                onClick={() => {
                  dispatch(applyCoupon({ coupon }));
                  if (!loading) {
                    setCoupon("");
                  }
                }}
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
            Subtotal: <span className="text-body-md-500">${totalAmount}</span>
          </p>
          <Divider />
          <p className="text-body-sm-500 text-gray-500 mt-4 flex items-center justify-between">
            After Coupon:{" "}
            <span className="text-body-md-500">${priceAfterCoupon}</span>
          </p>
          <Divider />
          <p className="text-body-sm-500 text-gray-500 mt-4 flex items-center justify-between">
            Total:{" "}
            <strong className="text-body-md-500 text-black">
              ${priceAfterCoupon > 0 ? priceAfterCoupon : totalAmount}
            </strong>
          </p>
          <Button
            variant={"myButton"}
            className=" mt-4 rounded-full py-[14px] px-[32px] w-full"
          >
            <Link to={"/payment-method"}>Proceed To Checkout</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
