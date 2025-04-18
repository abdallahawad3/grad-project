export const FeatureItem = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
      {icon}
      <span className="font-medium text-gray-800">{title}</span>
    </div>
  );
};
