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

export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
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

// All Categories Interfaces

export interface ICategory {
  name: string;
  image: File;
}
export interface ISubCategories {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
export interface ApiErrorResponse {
  message: string;
}
export interface ICategoryResponse {
  name: string;
  image: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
