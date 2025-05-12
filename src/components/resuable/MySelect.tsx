/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, type Control } from "react-hook-form";
interface SelectProps {
  onValueChange: (value: string) => void;
  name: string;
  control: Control<any>;
  selectLabel: string;
  selectPlaceholder: string;
  data: {
    value: string;
    label: string;
  }[];
}
export function MySelect({
  data,
  name,
  onValueChange,
  control,
  selectLabel,
  selectPlaceholder,
}: SelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Select
          onValueChange={(value) => {
            field.onChange(value);
            onValueChange(value);
          }}
          value={field.value}
        >
          <SelectTrigger>
            <SelectValue placeholder={selectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{selectLabel}</SelectLabel>
              {data &&
                data.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
          {fieldState.error && (
            <p className="text-[14px] font-normal  text-[#ef4444]">
              {fieldState.error.message}
            </p>
          )}
        </Select>
      )}
    />
  );
}
