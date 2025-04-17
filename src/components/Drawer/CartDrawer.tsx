import { closeCart } from "@/app/features/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";

const CartDrawer = () => {
  const { isOpen } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
        className={`w-[300px] z-[10000] fixed bg-white top-0  h-[100vh] shadow-lg p-6 transition-all duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl e=text-start font-semibold">Cart</h2>
        <div className="mt-4">Your cart is empty.</div>
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
