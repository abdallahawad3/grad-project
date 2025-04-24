const Divider = ({ dividerColor }: { dividerColor?: string }) => {
  return (
    <div
      className="w-full h-[1px]  my-4"
      style={{
        backgroundColor: dividerColor || "#E5E7EB",
      }}
    />
  );
};

export default Divider;
