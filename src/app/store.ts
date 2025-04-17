import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/AuthSlice";
import cartSlice from "./features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
