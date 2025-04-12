import { AppRoutes } from "@/enums";
import type { IPage } from "@/interface";

export const HomePages: IPage[] = [
  { PageURL: AppRoutes.HOME, title: "Home" },
  { PageURL: AppRoutes.ABOUT, title: "About" },
  { PageURL: AppRoutes.CONTACT, title: "Contact" },
  { PageURL: AppRoutes.PRODUCTS, title: "Products" },
];
