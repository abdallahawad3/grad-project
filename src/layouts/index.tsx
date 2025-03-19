import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  );
};

export default RootLayout;
