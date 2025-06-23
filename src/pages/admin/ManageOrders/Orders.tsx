/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetAllOrders from "@/api/orders/useGetAllOrders";
import Divider from "@/components/ui/Divider";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { Link } from "react-router-dom";

const Orders = () => {
  const { data } = useGetAllOrders();
  console.log(data?.data);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders History</h1>
      <div className="space-y-4">
        {data?.data.length > 0 ? (
          data.data.map((order: any, idx: number) => (
            <div
              key={idx}
              className="border-2 border-primary-400 p-6 rounded-md shadow-sm"
            >
              <div>
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-semibold mb-4">
                    Order Number{" "}
                    <span className="bg-primary-400 text-[#fff] p-2 rounded-sm">
                      #{order.id}
                    </span>{" "}
                    in date{" "}
                    <span className="bg-primary-400 text-[#fff] p-2 rounded-sm">
                      25/6/2025
                    </span>
                  </h2>
                  <Link
                    to={"/admin/manage-order" + `/${order._id}`}
                    className="text-[blue] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
                <div>
                  The Order Made By: {order.user.name}
                  <br />
                  Email: {order.user.email}
                </div>
              </div>
              <Divider height="2px" dividerColor="#444" />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-[50vh]">
            <h2 className="text-xl font-semibold text-gray-500">
              No orders found.
            </h2>
          </div>
        )}
      </div>

      {/* <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <Table className="mt-6">
          <TableCaption>A list of your recent ordered product.</TableCaption>
          <TableHeader className="bg-gray-50 text-white">
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((product: any) => (
              <TableRow key={product._id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={`http://localhost:8000/products/${product.imageCover}`}
                      alt={product.product.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />

                    <p>
                      {product.title.length > 30
                        ? `${product.title.slice(0, 30)}...`
                        : product.title}
                    </p>
                  </div>
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>X{product.count}</TableCell>
                <TableCell className="text-right">
                  {product.count * product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                ${data?.data.totalOrderPrice}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div> */}
    </div>
  );
};

export default Orders;
