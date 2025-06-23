/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetAllOrders from "@/api/orders/useGetAllOrders";
import Divider from "@/components/ui/Divider";
import { Link } from "react-router-dom";

const OrdersHistory = () => {
  const { data } = useGetAllOrders();

  return (
    <>
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
                    to={"/user/track-order" + `/${order._id}`}
                    className="text-[blue] hover:underline"
                  >
                    View Details
                  </Link>
                </div>{" "}
              </div>
              <Divider height="2px" dividerColor="#444" />
              {/* Small Product */}
              {/* {console.log(order.cartItems)} */}
              {order.cartItems.map((ele: any) => {
                return (
                  <div key={ele._id}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={`http://127.0.0.1:8000/products/${ele.product.imageCover}`}
                          alt="Product"
                          className="w-[100px] h-[100px] object-cover rounded"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">
                            {ele.product.title}
                          </h3>
                          <p className="text-gray-500">Quantity: {ele.count}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold">${ele.price}</span>
                    </div>
                  </div>
                );
              })}
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
    </>
  );
};

export default OrdersHistory;
