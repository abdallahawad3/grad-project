import CookieServices from "@/services/index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import userImg from "@/assets/svg/user_3 1.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
    _id: string;
  }>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    setUser(CookieServices.get("user"));
  }, [isAuthenticated]);
  if (!user) {
    return;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" p-2 mr-2 relative focus:outline-none focus:ring-2 focus:ring-success-400 rounded">
        <img className="h-[20px] w-[20px]" src={userImg} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-5">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link to={`${user.role == "admin" ? "/admin" : "/user"}`}>
            <strong className="text-gray-700">Role: </strong>
            {user.role.toLocaleUpperCase()}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="pointer-events-none bg-gray-50">
          <strong className="text-gray-700">Name :</strong> {user.name}
        </DropdownMenuItem>
        <DropdownMenuItem className="pointer-events-none bg-gray-50">
          {user.email}
        </DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
