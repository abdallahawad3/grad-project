import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h1>Admin Navbar</h1>
      <Outlet />
    </>
  );
};

export default AdminLayout;
