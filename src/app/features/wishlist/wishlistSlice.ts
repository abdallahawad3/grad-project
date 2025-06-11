import { axiosInstance } from "@/config/axios.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface WishlistState {
  // Define the state structure for the wishlist
  loading: boolean;
  error: string | null;
  items: {
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
    id: string;
  }[];
}

const initialState: WishlistState = {
  loading: false,
  error: null,
  items: [],
};

const getAllWishlistItems = createAsyncThunk(
  "getAllWishlistItems",
  async () => {
    const { data, status } = await axiosInstance.get("/wishlist");
    if (status === 200) {
      return data.data;
    } else {
      throw new Error("Failed to fetch wishlist items");
    }
  }
);

const addProductToWishlist = createAsyncThunk(
  "addProductToWishlist",
  async (productId: string) => {
    const { status } = await axiosInstance.post("/wishlist", {
      productId,
    });
    if (status === 200 || status === 201) {
      const { data, status } = await axiosInstance.get("/wishlist");
      if (status === 200) {
        return data.data;
      }
    } else {
      throw new Error("Failed to add product to wishlist");
    }
  }
);

const removeProductFromWishlist = createAsyncThunk(
  "removeProductFromWishlist",
  async (productId: string) => {
    const { status } = await axiosInstance.delete(`/wishlist/${productId}`);
    if (status === 200) {
      const { data, status } = await axiosInstance.get("/wishlist");
      if (status === 200) {
        return data.data;
      }
    } else {
      throw new Error("Failed to remove product from wishlist");
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllWishlistItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllWishlistItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(getAllWishlistItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch wishlist items";
    });
    builder.addCase(addProductToWishlist.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProductToWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(addProductToWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to add product to wishlist";
    });
    builder.addCase(removeProductFromWishlist.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeProductFromWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(removeProductFromWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "Failed to remove product from wishlist";
    });
  },
});

export { getAllWishlistItems, removeProductFromWishlist, addProductToWishlist };
export default wishlistSlice;
