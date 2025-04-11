import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import user from "@/assets/svg/user_3 1.svg";

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" p-2 mr-2 relative focus:outline-none focus:ring-2 focus:ring-success-400 rounded">
        <img className="h-[20px] w-[20px]" src={user} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="">
        <DropdownMenuLabel className="text-center">User</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
