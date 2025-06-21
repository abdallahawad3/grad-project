/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetAddresses from "@/api/addresses/useGetAddresses";
import useAddOrder from "@/api/payment/useAddOrder";
import { getAllCartItems } from "@/app/features/Cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Payment = () => {
  const [selectAddressId, setSelectAddressId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { totalAmount, data: cartData } = useAppSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useAppDispatch();
  const { data } = useGetAddresses();
  const { mutate: AddOrder } = useAddOrder();

  // ! Fetch all cart items on component mount //
  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch]);

  //! Submit Handler //
  const onSubmit = async () => {
    if (!selectAddressId || !paymentMethod) {
      toast.error("Please select an address and payment method.");
      return;
    }
    const address = data?.data.find(
      (address: any) => address._id === selectAddressId
    );

    AddOrder(
      { cartId: cartData._id, address },
      {
        onSuccess: () => {
          toast.success("Order placed successfully!");
          setPaymentMethod("");
          setPaymentMethod("");
        },
        onError: () => {
          toast.error("Failed to place order. Please try again.");
        },
      }
    );
  };
  return (
    <div className="h-[70vh] container py-10">
      <h1 className="text-2xl font-bold ">Select Payment Method</h1>
      <p className="mt-4 ">This is where you can process your payments.</p>
      {/* Add payment processing components here */}
      <div className="border-2 p-6 rounded-lg shadow-md mt-6">
        <p className="my-4 border-b text-gray-600">
          Please choose a payment method to proceed with your transaction.
        </p>
        {/* div */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="space-y-2 border-2 border-primary-300 p-4 rounded-sm shadow-sm flex-1">
            <Label>
              Select your preferred{" "}
              <span className="text-[#FFC107] font-normal text-uppercase">
                payment method:
              </span>
            </Label>
            <RadioGroup
              onValueChange={(value) => {
                setPaymentMethod(value);
              }}
              // className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="visa" id="r1" />
                <Label htmlFor="r1">
                  using visa, mastercard, or american express
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="onDelivery" id="r2" />
                <Label htmlFor="r2">On delivery (cash on delivery)</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="border-2 px-4 py-5 rounded-sm border-primary-300 shadow-sm flex-1">
            <Select
              onValueChange={(value) => {
                setSelectAddressId(value);
              }}
            >
              <Label className="inline-block mb-2">
                Select an{" "}
                <span className="text-[#FFC107] font-normal text-uppercase">
                  address:
                </span>
              </Label>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an address" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Address</SelectLabel>
                  {data?.data.map((address: any) => (
                    <SelectItem
                      onSelect={() => {
                        console.log(`Selected address ID: ${address._id}`);
                      }}
                      key={address._id}
                      value={address._id}
                    >
                      {address.alias} - {address.details}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <span className="border-2 border-primary-300 p-3 rounded-sm">
          Total:{" "}
          <span className="text-lg font-semibold border-b-2">
            ${totalAmount}
          </span>
        </span>
        <button
          onClick={onSubmit}
          className="rounded-md bg-primary-700 p-3 text-white hover:bg-primary-600"
        >
          Complete payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
