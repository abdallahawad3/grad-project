import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  React.ComponentProps<"input"> & React.ComponentProps<"textarea">
>(({ className, type, ...props }, ref) => {
  if (type === "textarea") {
    return (
      <textarea
        className={cn(
          "flex h-24 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        {...props}
      />
    );
  }
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref as React.Ref<HTMLInputElement>}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
