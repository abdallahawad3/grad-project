/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, { components } from "react-select";
import { Controller, type Control } from "react-hook-form";

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  onValueChange: (value: string[] | string) => void;
  name: string;
  control: Control<any>;
  selectLabel: string;
  selectPlaceholder: string;
  data: OptionType[];
  isMulti?: boolean;
}

// Custom color box
const ColorBox = ({ color }: { color: string }) => (
  <div
    style={{
      width: 16,
      height: 16,
      backgroundColor: color,
      borderRadius: 4,
      marginRight: 8,
      border: "1px solid #ccc",
    }}
  />
);

// Custom Option component to show color
const CustomOption = (props: any) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps} className="flex items-center p-2">
      <ColorBox color={data.value} />
      {data.label}
    </div>
  );
};

// Custom MultiValue to show color
const CustomMultiValue = (props: any) => {
  const { data } = props;
  return (
    <components.MultiValue {...props}>
      <div className="flex items-center">
        <ColorBox color={data.value} />
        {data.label}
      </div>
    </components.MultiValue>
  );
};

export function MySelect({
  data,
  name,
  onValueChange,
  control,
  isMulti = false,
  selectPlaceholder,
}: SelectProps) {
  const isColorMode = name === "availableColors"; // conditionally enable color UI

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Select
              isMulti={isMulti}
              options={data}
              placeholder={selectPlaceholder}
              components={
                isColorMode
                  ? {
                      Option: CustomOption,
                      MultiValue: CustomMultiValue,
                    }
                  : undefined
              }
              value={
                isMulti
                  ? data.filter((option) =>
                      Array.isArray(field.value)
                        ? field.value.includes(option.value)
                        : []
                    )
                  : data.find((option) => option.value === field.value) || null
              }
              onChange={(selected) => {
                let value;
                if (isMulti) {
                  value = selected
                    ? (selected as OptionType[]).map((opt) => opt.value)
                    : [];
                } else {
                  value = selected ? (selected as OptionType).value : "";
                }
                field.onChange(value);
                onValueChange(value);
              }}
              classNamePrefix="react-select"
            />
            {fieldState.error && (
              <p className="text-[14px] font-normal text-[#ef4444]">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}
