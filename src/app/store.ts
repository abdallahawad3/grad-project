import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/AuthSlice";
import cartSlice from "./features/Cart/cartSlice";
import { sidebarSlice } from "./features/sidebar/sidebarSlice";
import wishlistSlice from "./features/wishlist/wishlistSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice,
    sidebar: sidebarSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
