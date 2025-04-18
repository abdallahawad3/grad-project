// import { Home } from "lucide-react";
export default function Header({ bgImage }: { bgImage: string }) {
  return (
    <div
      className=" w-full h-[120px] bg-cover bg-center flex items-center px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* <div className="container flex items-center gap-2 text-white text-lg font-medium">
        <Home className="w-5 h-5" />
        <span>Contact</span>
      </div> */}
    </div>
  );
}
