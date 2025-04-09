import Nav from "@/components/header/Nav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default RootLayout;
