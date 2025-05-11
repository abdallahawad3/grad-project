import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ADMIN_PAGES } from "@/data";
import { Link, useLocation } from "react-router-dom";
import Divider from "../ui/Divider";

export function AppSidebar() {
  const { pathname } = useLocation();
  return (
    <Sidebar className="w-[250px] rounded-md overflow-hidden md:static md:!h-fit border-r  shadow-md">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between text-lg font-semibold text-gray-700">
            <span>Admin Dashboard</span>
          </SidebarGroupLabel>
          <Divider />
          <SidebarGroupContent>
            <SidebarMenu>
              {ADMIN_PAGES.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={`/admin${item.url}`}
                      className={`inline-block hover:bg-gray-100 py-[25px] rounded-none  ${
                        pathname === `/admin${item.url}`
                          ? "bg-gray-50 border-l-4 border-l-success-200 text-gray-900 text-body-md-500 "
                          : "text-gray-600 text-body-sm-500"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
