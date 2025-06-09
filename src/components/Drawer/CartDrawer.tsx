import useGetAllCart from "@/api/cart/useGetAllCart";
import { closeCart } from "@/app/features/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";

const CartDrawer = () => {
  const { isOpen } = useAppSelector((state: RootState) => state.cart);
  const { data: CartData } = useGetAllCart();
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        className={`w-[300px] md:w-[400px] z-[10000] fixed bg-white top-0  h-[100vh] shadow-lg p-6 transition-all duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl e=text-start font-semibold">Cart</h2>
        <div className="mt-4">
          <div>
            {/* Conditional Rendering for Empty Cart */}
            {!CartData?.data.products || CartData.data.products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-center text-gray-500 text-lg">
                  Your cart is empty
                </p>
                <p className="text-center text-gray-400 mt-2">
                  Looks like you haven't added anything to your cart yet.
                </p>
              </div>
            ) : (
              // List of Cart Items
              <div className="space-y-4">
                {CartData.data.products.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <img
                        src={`http://127.0.0.1:8000/products/${item.product.imageCover}`}
                        alt={item.product.title}
                        className="w-20 h-20 object-cover rounded-md border border-gray-100"
                      />
                      {/* Product Details */}
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.product.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.count} &times; ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    {/* Subtotal */}
                    <span className="text-lg font-bold text-gray-900">
                      ${(item.count * item.price).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        onClick={() => dispatch(closeCart())}
        className={`fixed inset-0 bg-black z-[999] 
          transition-all duration-500 
          ${isOpen ? "opacity-[.7]" : "opacity-0 pointer-events-none"} `}
      />
    </div>
  );
};

export default CartDrawer;
