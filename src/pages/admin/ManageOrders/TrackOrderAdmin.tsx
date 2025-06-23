/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetSingleOrder from "@/api/orders/useGetSingleOrder";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useChangePaid from "@/api/orders/useChangePaid";
import toast from "react-hot-toast";
import useChangeDeliver from "@/api/orders/useChangeDeliver";
const TrackOrderAdmin = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { data, refetch } = useGetSingleOrder({
    orderId: orderId || "",
  });
  const [paid, setPaid] = useState("");
  const [deliver, setDeliver] = useState("");
  const { mutate: changePaid } = useChangePaid();
  const { mutate: ChangeDeliver } = useChangeDeliver();
  return (
    <div className="border -mt-[21px] p-5 shadow-md rounded-lg mb-10">
      <h1 className="text-2xl font-bold text-center pb-6">
        Track Order #{data?.data.id}
      </h1>
      <div>
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
            {data?.data.cartItems.map((product: any) => (
              <TableRow key={product._id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={`http://localhost:8000/products/${product.product.imageCover}`}
                      alt={product.product.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />

                    <p>
                      {product.product.title.length > 30
                        ? `${product.product.title.slice(0, 30)}...`
                        : product.product.title}
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
      </div>
      <div className="mt-8 p-6 border rounded-lg shadow-md bg-white space-y-8">
        {/* Client Details */}
        <section>
          <h2 className="text-xl font-bold border-b pb-2 mb-4 text-gray-800">
            Client Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {data?.data.user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {data?.data.user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {data?.data.shippingAddress && data?.data.shippingAddress.phone}
            </p>
          </div>
        </section>

        {/* Order Details */}
        <section>
          <h2 className="text-xl font-bold border-b pb-2 mb-4 text-gray-800">
            Order Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Order Date:</span>{" "}
              {new Date(data?.data.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <span className="font-semibold">Order ID:</span> {data?.data._id}
            </p>
            <p>
              <span className="font-semibold">Payment Method:</span>{" "}
              {data?.data.paymentMethodType}
            </p>
            <p>
              <span className="font-semibold">Payment Status:</span>{" "}
              <span
                className={`inline-block px-2 py-1 rounded ${
                  data?.data.paymentStatus
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {data?.data.isPaid ? "Paid" : "Unpaid"}
              </span>
            </p>
            <p>
              <span className="font-semibold">Delivery Address:</span>{" "}
              {data?.data.shippingAddress && data?.data.shippingAddress.city}
            </p>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="mt-6 flex gap-1">
              {/* Paid Status */}
              <Select onValueChange={(value) => setPaid(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Paid Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectContent>
              </Select>
              <Button
                disabled={!paid}
                onClick={() => {
                  if (paid === "paid" && orderId) {
                    changePaid(orderId, {
                      onSuccess: () => {
                        toast.success("Paid status updated successfully!");
                        refetch();
                      },
                      onError: (error) => {
                        console.error("Error updating paid status:", error);
                      },
                    });
                  } else if (paid === "unpaid" && data?.data.isPaid) {
                    toast.error(
                      "Order is already paid! Cannot mark as unpaid."
                    );
                  } else if (paid === "unpaid" && !data?.data.isPaid) {
                    toast.error("Order is already unpaid!");
                  }
                }}
                className=" text-white px-4 py-2 rounded"
              >
                Save Changes
              </Button>
            </div>
            <div className="mt-6 flex gap-1">
              {/* Paid Status */}
              <Select onValueChange={(value) => setDeliver(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Delivered Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deliver">Delivered</SelectItem>
                  <SelectItem value="UnDelivered">UnDelivered</SelectItem>
                </SelectContent>
              </Select>

              <Button
                disabled={!deliver}
                onClick={() => {
                  if (deliver === "deliver" && orderId) {
                    ChangeDeliver(orderId, {
                      onSuccess: () => {
                        toast.success("Delivery status updated successfully!");
                        refetch();
                      },
                      onError: (error) => {
                        console.error("Error updating delivery status:", error);
                      },
                    });
                  } else if (
                    deliver === "UnDelivered" &&
                    data?.data.isDelivered
                  ) {
                    toast.error(
                      "Order is already delivered! Cannot mark as undelivered."
                    );
                  } else {
                    toast.error("Order is already undelivered!");
                  }
                }}
                className=" text-white px-4 py-2 rounded"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrackOrderAdmin;
