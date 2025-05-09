import CheckoutForm from "@/components/Checkout/CheckoutForm";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import type { CHECKOUT_VALIDATION } from "@/validation";
import type { z } from "zod";

const Checkout = () => {
  function onSubmit(data: z.infer<typeof CHECKOUT_VALIDATION>) {
    toast({
      title: "You submitted the following values",
      style: {
        backgroundColor: "#f0f4f8",
        color: "#333",
        fontSize: "14px",
      },
      duration: 2000,
    });
    console.log(data);
  }
  return (
    <section className="container mx-auto py-10 px-4">
      {/* Form For Checkout */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-[.75]">
          <CheckoutForm
            onSubmit={onSubmit}
            children={<Button type="submit">Submit</Button>}
          />
        </div>
        <div className="flex-[.25]">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {/* Order summary details go here */}
            <p>Item 1: $10.00</p>
            <p>Item 2: $20.00</p>
            <p>Total: $30.00</p>
          </div>
        </div>
      </div>
      {/* Content */}
    </section>
  );
};

export default Checkout;
