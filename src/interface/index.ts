export interface IPage {
  title: string;
  PageURL: string;
}

export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  availableColors: string[];
  imageCover: string;
  images: string[];
  category: string;
  subcategory: string[];
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IAddProduct {
  title: string;
  description: string;
  quantity: string;
  sold?: number;
  price: string;
  availableColors?: string[];
  imageCover: File | null;
  images: File[] | null;
  category: string;
  subcategory?: string[];
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
