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
import { Link, useLocation } from "react-router-dom";
import Divider from "../ui/Divider";
import type { ElementType } from "react";
import { ShoppingBag } from "lucide-react";
interface IProps {
  pages: { name: string; icon: ElementType; url: string }[];
  to: string;
}
export function AppSidebar({ pages, to }: IProps) {
  const { pathname } = useLocation();

  return (
    <Sidebar className="w-[250px] rounded-md overflow-hidden md:static md:!h-fit border-r  shadow-md">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between text-lg font-semibold text-gray-700">
            <span>{to == "admin" ? "Admin Dashboard" : "User Dashboard"}</span>
          </SidebarGroupLabel>
          <Divider />
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={`/${to}${item.url}`}
                      className={`inline-block hover:bg-gray-100 py-[25px] rounded-none  ${
                        pathname === `/${to}${item.url}`
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
              {to === "user" && (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to={`/cart`}
                      className={`inline-block hover:bg-gray-100 py-[25px] rounded-none  `}
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>cart</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
