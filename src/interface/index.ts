export interface IPage {
  title: string;
  PageURL: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

export interface IFormItemForCheckout {
  label: string;
  name:
    | "firstname"
    | "lastname"
    | "companyName"
    | "email"
    | "phone"
    | "country"
    | "state"
    | "zip";

  placeholder: string;
  type: string;
}
export interface CookieOptions {
  maxAge?: number;
  signed?: boolean;
  expires?: Date;
  httpOnly?: boolean;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: boolean | "lax" | "strict" | "none";
}
