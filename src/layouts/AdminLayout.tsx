import { useAppSelector } from "@/app/hooks";
import type { RootState } from "@/app/store";
import Navbar from "@/components/header";
import { AppSidebar } from "@/components/SidebarLayout/LayoutSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { open } = useAppSelector((state: RootState) => state.sidebar);
  return (
    <>
      <Navbar />
      <SidebarProvider>
        <div className="flex w-[98%] gap20">
          <AppSidebar />
          <main className="mt-5 flex-1 mx-auto">
            {!open && <SidebarTrigger />}
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default AdminLayout;
