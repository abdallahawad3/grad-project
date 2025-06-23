/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetSingleOrder from "@/api/orders/useGetSingleOrder";
import Divider from "@/components/ui/Divider";
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
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const steps = [
  { title: "Order received" },
  { title: "Processing" },
  { title: "On the way" },
  { title: "Delivered" },
];

const TrackOrder = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [currentStep, setCurrentStep] = useState(0);
  const { data } = useGetSingleOrder({
    orderId: orderId || "",
  });

  useEffect(() => {
    if (data?.data) {
      if (data.data.isDelivered === true) {
        setCurrentStep(3);
      } else if (data.data.isPaid === true) {
        setCurrentStep(2);
      } else if (data.data.paymentMethodType === "cash") {
        setCurrentStep(1);
      } else {
        setCurrentStep(0);
      }
    }
  }, [data]);

  if (!orderId) return null;
  return (
    <div className="border -mt-[21px] p-5 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center pb-6">
        Track Your Order #{data?.data.id}
      </h1>
      <ProgressBar steps={steps} currentStepIndex={currentStep} />
      <Divider height="4px" dividerColor="#010403" />
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
    </div>
  );
};

export default TrackOrder;
const ProgressBar = ({
  steps,
  currentStepIndex,
}: {
  steps: { title: string }[];
  currentStepIndex: number;
}) => {
  const progressPercent = (currentStepIndex / (steps.length - 1)) * 95;

  return (
    <div className="relative w-full flex items-center">
      {/* Step Wrapper */}
      <div className="flex justify-between items-center w-full relative z-10">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          const isUpcoming = index > currentStepIndex;

          return (
            <div
              key={index}
              className="flex flex-col items-center relative z-20"
            >
              {/* Step Circle */}
              <div
                className={`
                  w-10 h-10 mt-[30px] rounded-full flex items-center justify-center font-semibold text-lg transition-all duration-300
                  ${
                    isCompleted || isActive
                      ? "bg-[#0A947C] text-white shadow-lg"
                      : ""
                  }
                  ${
                    isUpcoming
                      ? "bg-white border-2 border-dashed border-gray-300 text-gray-500"
                      : ""
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <span>{String(index + 1).padStart(2, "0")}</span>
                )}
              </div>

              {/* Step Title */}
              <div
                className={`
                  mt-3 text-sm text-center whitespace-nowrap px-1
                  ${
                    isCompleted || isActive
                      ? "text-[#0A947C] font-medium"
                      : "text-gray-500"
                  }
                `}
              >
                {step.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Line Behind Circles */}
      <div className="absolute top-1/2 left-[5%] right-[5%] h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0" />

      {/* Progress Line */}
      <div
        className="absolute top-1/2 left-[5%] h-1 bg-[#0A947C] -translate-y-1/2 rounded-full z-0 transition-all duration-500 ease-in-out"
        style={{
          width: `${progressPercent}%`,
        }}
      />
    </div>
  );
};

export { ProgressBar };
