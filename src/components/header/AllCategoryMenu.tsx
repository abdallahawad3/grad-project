/* eslint-disable @typescript-eslint/no-explicit-any */
import menu from "@/assets/svg/menu 1.svg";
import arrowDown from "@/assets/svg/Chevron Down.svg";
import { Mail, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AllCategoryMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="relative">
        <Button className="focus-visible:ring-none  bg-success-500 py-8 rounded-none hover:bg-success-400">
          <img src={menu} alt="menu" />
          All Categories
          <img src={arrowDown} alt="arrow down" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[500px] absolute left-0 rounded-none md:-left-[102px] -top-[5px]">
        <DropdownMenuLabel>All Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="">
          {category.map((cat, index) =>
            cat.subCategory?.length ? (
              <MenuSubCategory
                key={index}
                title={cat.title}
                subCategories={cat.subCategory}
              />
            ) : (
              <DropdownMenuItem key={index}>{cat.title}</DropdownMenuItem>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AllCategoryMenu;

// SubCategory component - now dynamic!
const MenuSubCategory = ({
  title,
  subCategories,
}: {
  title: string;
  subCategories: any[];
}) => {
  return (
    <div className="">
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <UserPlus />
          <span>{title}</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className="w-[200px] absolute overflow-y-auto">
            {subCategories.map((subCat, index) =>
              subCat.subCategory?.length ? (
                <MenuSubCategory
                  key={index}
                  title={subCat.title}
                  subCategories={subCat.subCategory}
                />
              ) : (
                <DropdownMenuItem key={index}>
                  <Mail />
                  <span>{subCat.title}</span>
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </div>
  );
};

const category = [
  {
    title: "Category 1",
    subCategory: [
      {
        title: "Sub Category 1",
        subCategory: [
          { title: "Sub Sub Category 1" },
          { title: "Sub Sub Category 2" },
        ],
      },
      {
        title: "Sub Category 2",
      },
    ],
  },
  {
    title: "Category 1",
    subCategory: [],
  },
  {
    title: "Category 2",
    subCategory: [{ title: "Sub Category 1" }, { title: "Sub Category 2" }],
  },
];
