const Divider = ({
  dividerColor,
  height = "1px",
}: {
  dividerColor?: string;
  height?: string;
}) => {
  return (
    <div
      className="w-full  my-4"
      style={{
        backgroundColor: dividerColor || "#E5E7EB",
        height: height,
      }}
    />
  );
};

export default Divider;
