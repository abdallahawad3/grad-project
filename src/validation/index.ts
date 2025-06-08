import { z } from "zod";

export const REGISTER_SCHEMA = z
  .object({
    name: z
      .string({ message: "The Name Filde Is Required" })
      .min(3, { message: "The mini character is 3 " }),
    email: z.string().email({ message: "enter valid email" }),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
    passwordConfirm: z.string().min(8, {
      message: "Confirm Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

export const CATEGORY_SCHEMA = z.object({
  name: z.string({ message: "The Name Filde Is Required" }).min(3, {
    message: "The mini character is 3 ",
  }),
});

export const PRODUCT_SCHEMA = z.object({
  title: z.string({ message: "The Title Filde Is Required" }).min(3, {
    message: "The mini character is 3 ",
  }),
  description: z.string({ message: "The Description Filde Is Required" }),
  quantity: z
    .string({ message: "The Quantity Filde Is Required" })
    .min(1, { message: "The mini character is 1" }),
  price: z
    .string({ message: "The Price Filde Is Required" })
    .min(1, { message: "The mini character is 1" }),
  availableColors: z
    .array(z.string(), {
      message: "The Available Colors Filde Is Required",
    })
    .min(1, { message: "The mini character is 1" })
    .optional(),
  category: z.string({ message: "The Category Filde Is Required" }).min(1, {
    message: "This field is required",
  }),
  subcategory: z
    .array(z.string(), { message: "The Subcategory Filde Is Required" })
    .min(1, { message: "This field is required" })
    .optional(),
});

export const BRAND_SCHEMA = z.object({
  name: z.string({ message: "The Name Filde Is Required" }).min(3, {
    message: "The mini character is 3 ",
  }),
});

export const SUB_CATEGORY_SCHEMA = z.object({
  name: z.string({ message: "The Name Filde Is Required" }).min(3, {
    message: "The mini character is 3 ",
  }),
  category: z.string({ message: "The Category Filde Is Required" }).min(1, {
    message: "This field is required",
  }),
});

export const CHECKOUT_VALIDATION = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  companyName: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  zip: z.string().min(5, {
    message: "Zip code must be at least 5 characters.",
  }),
});
