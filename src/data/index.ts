import { AppRoutes } from "@/enums";
import type { IFormItemForCheckout, IPage } from "@/interface";

export const HomePages: IPage[] = [
  { PageURL: AppRoutes.HOME, title: "Home" },
  { PageURL: AppRoutes.ABOUT, title: "About" },
  { PageURL: AppRoutes.CONTACT, title: "Contact" },
  { PageURL: AppRoutes.PRODUCTS, title: "Products" },
];

export const CheckoutFormData: IFormItemForCheckout[] = [
  {
    label: "First Name",
    name: "firstname",
    placeholder: "First Name",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lastname",
    placeholder: "Last Name",
    type: "text",
  },
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Company Name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "abc@gamil.com",
    type: "email",
  },
  {
    label: "Phone",
    name: "phone",
    placeholder: "+201012345678",
    type: "number",
  },
  {
    label: "Country",
    name: "country",
    placeholder: "Cairo",
    type: "text",
  },
  {
    label: "State",
    name: "state",
    placeholder: "El-Menofia",
    type: "text",
  },
  {
    label: "Zip Code",
    name: "zip",
    placeholder: "12345",
    type: "text",
  },
];
