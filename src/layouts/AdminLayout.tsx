import Navbar from "@/components/header";
import { AppSidebar } from "@/components/SidebarLayout/LayoutSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ADMIN_PAGES } from "@/data";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar />
      <SidebarProvider>
        <div className="container mt-10 flex w-[98%] gap-5">
          <AppSidebar to="admin" pages={ADMIN_PAGES} />
          <main className="mt-5 flex-1 mx-auto">
            {isMobile && <SidebarTrigger />}
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
