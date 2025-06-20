/* eslint-disable @typescript-eslint/no-explicit-any */
import CookieServices from "@/services/index";
import { axiosInstance } from "@/config/axios.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface ICartState {
  numOfCartItems: number;
  coupon?: string;
  data: {
    _id: string;
    products: {
      product: {
        _id: string;
        title: string;
        imageCover: string;
        category: {
          name: string;
        };
        brand: {
          name: string;
        };
        id: string;
      };
      count: number;
      price: number;
      _id: string;
    }[];
    cartOwner: string;

    totalCartPrice: number;
  };
  totalQuantity: number;
  totalAmount: number;
  priceAfterCoupon: number;
  isOpen: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ICartState = {
  numOfCartItems: 0,
  coupon: "",
  priceAfterCoupon: 0,
  data: {
    _id: "",
    products: [],
    cartOwner: "",
    totalCartPrice: 0,
  },
  totalQuantity: 0,
  totalAmount: 0,
  isOpen: false,
  loading: false,
  error: null,
};

const getAllCartItems = createAsyncThunk("getAllCartItems", async () => {
  const { data } = await axiosInstance.get("/cart", {
    headers: {
      Authorization: `Bearer ${CookieServices.get("token")}`,
    },
  });

  if (data.status === "success") {
    return data;
  } else {
    throw new Error(data.message);
  }
});

const addToCart = createAsyncThunk(
  "addToCart",
  async ({ productId }: { productId: string }) => {
    const { data, status } = await axiosInstance.post(
      "/cart",
      { productId },
      {
        headers: {
          Authorization: `Bearer ${CookieServices.get("token")}`,
        },
      }
    );

    if (status === 200) {
      const productCount = data.data.products.find(
        (item: any) => item.product === productId
      );

      toast.success(`Added ${productCount.count} items to cart`);
      const { data: allCart } = await axiosInstance.get("/cart", {
        headers: {
          Authorization: `Bearer ${CookieServices.get("token")}`,
        },
      });
      return allCart;
    }
  }
);
const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async ({ productId }: { productId: string }) => {
    const { status } = await axiosInstance.delete(`/cart/${productId}`, {
      headers: {
        Authorization: `Bearer ${CookieServices.get("token")}`,
      },
    });
    if (status === 200) {
      toast.success("Item removed from cart");
      const { data: allCart } = await axiosInstance.get("/cart", {
        headers: {
          Authorization: `Bearer ${CookieServices.get("token")}`,
        },
      });
      return allCart;
    }
  }
);

const removeAllCartItems = createAsyncThunk("removeAllCartItems", async () => {
  const { status } = await axiosInstance.delete("/cart", {
    headers: {
      Authorization: `Bearer ${CookieServices.get("token")}`,
    },
  });
  if (status === 204) {
    toast.success("All items removed from cart", {
      style: {
        zIndex: 500000000,
      },
    });
  } else {
    throw new Error("Failed to remove all items from cart");
  }
});

const applyCoupon = createAsyncThunk(
  "applyCoupon",
  async ({ coupon }: { coupon: string }) => {
    console.log(coupon);
    const { data } = await axiosInstance.put(
      "/cart/applyCoupon",
      { couponName: coupon },
      {
        headers: {
          Authorization: `Bearer ${CookieServices.get("token")}`,
        },
      }
    );

    if (data.status === "success") {
      toast.success("Coupon applied successfully");
      console.log(data);
      return data;
    } else {
      toast.error(data.message);
      throw new Error(data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCartItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.numOfCartItems = action.payload.numOfCartItems;
      state.totalQuantity = action.payload.data.products.reduce(
        (total: any, item: any) => total + item.count,
        0
      );
      state.totalAmount = action.payload.data.totalCartPrice;
      state.priceAfterCoupon = action.payload.data.totalAfterDiscount || 0;
      state.coupon = action.payload.data.coupon || "";
    });
    builder.addCase(getAllCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch cart items";
    });

    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.data = action.payload.data;
        state.numOfCartItems = action.payload.numOfCartItems;
        state.totalQuantity = action.payload.data.products.reduce(
          (total: any, item: any) => total + item.count,
          0
        );
        state.totalAmount = action.payload.data.totalCartPrice;
      }
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to add to cart";
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.data = action.payload.data;
        state.numOfCartItems = action.payload.numOfCartItems;
        state.totalQuantity = action.payload.data.products.reduce(
          (total: any, item: any) => total + item.count,
          0
        );
        state.totalAmount = action.payload.data.totalCartPrice;
      }
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to remove from cart";
    });
    builder.addCase(removeAllCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeAllCartItems.fulfilled, (state) => {
      state.loading = false;
      state.data = {
        _id: "",
        products: [],
        cartOwner: "",
        totalCartPrice: 0,
      };
      state.numOfCartItems = 0;
      state.totalQuantity = 0;
      state.totalAmount = 0;
    });
    builder.addCase(removeAllCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "Failed to remove all items from cart";
    });
    builder.addCase(applyCoupon.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(applyCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.priceAfterCoupon = action.payload.data.totalAfterDiscount;
      state.data.totalCartPrice = action.payload.data.totalCartPrice;
      state.data.products = action.payload.data.products;
    });
    builder.addCase(applyCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to apply coupon";
      toast.error(state.error);
    });
  },
});

export const { openCart, closeCart } = cartSlice.actions;
export {
  getAllCartItems,
  addToCart,
  removeFromCart,
  removeAllCartItems,
  applyCoupon,
};
export default cartSlice.reducer;
