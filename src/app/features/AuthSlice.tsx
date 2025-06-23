import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { axiosInstance } from "@/config/axios.config";
import type { AxiosError } from "axios";
import CookieServices from "@/services/index";

interface UserState {
  data: {
    _id: string;
    name: string;
    slug: string;
    email: string;
    role: string;
    active: boolean;
    wishlist: string[];
    addresses: {
      alias: string;
      details: string;
      phone: string;
      city: string;
      postalCode: string;
      _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
  };
  token: string;
  loading: boolean;
  error: string | null;
  role: string;
  isAuthenticated: boolean;
  cart: {
    _id: string;
    products: {
      product: {
        _id: string;
        title: string;
        slug: string;
        description: string;
        quantity: number;
        sold: number;
        price: number;
        priceAfterDiscount: number;
        availableColors: string[];
        imageCover: string;
        images: string[];
        category: string;
        subcategory: string[];
        brand: string;
        ratingsQuantity: number;
        createdAt: string;
        updatedAt: string;
        __v: number;
        ratingsAverage: number;
        id: string;
      };
      count: number;
      price: number;
      _id: string;
    }[];
    cartOwner: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
  };
}

const initialState: UserState = {
  data: CookieServices.get("user") || {
    _id: "",
    name: "",
    slug: "",
    email: "",
    role: "",

    active: false,
    wishlist: [],
    addresses: [],
    createdAt: "",
    updatedAt: "",
  },
  token: CookieServices.get("token") || "",
  isAuthenticated: !!CookieServices.get("token"),
  role: CookieServices.get("role") || "",
  loading: false,
  error: null,
  cart: CookieServices.get("cart") || {
    _id: "",
    products: [],
    cartOwner: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    totalCartPrice: 0,
  },
};

export const loginUser = createAsyncThunk(
  "loginUser",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data, status } = await axiosInstance.post(
        "/auth/login",
        userData
      );
      if (status === 200) {
        CookieServices.set("token", data.token, {});
        CookieServices.set("role", data.data.role, {});
        CookieServices.set("cart", JSON.stringify(data.cart), {});
        CookieServices.set("user", JSON.stringify(data.data), {});
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (
    userData: {
      name: string;
      email: string;
      password: string;
      passwordConfirm: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.data = action.payload.data;
      state.token = action.payload.token;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (
          action.payload as AxiosError<{
            message: string;
          }>
        ).response?.data.message || "Something went wrong!";
    });

    // Register User
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<UserState>) => {
        state.loading = false;
        state.data = action.payload.data;
        state.token = action.payload.token;
        state.error = null;
      }
    );
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as AxiosError<{ errors: [{ msg: string }] }>)?.response
          ?.data?.errors[0].msg || "Something went wrong!";
    });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default authSlice.reducer;
