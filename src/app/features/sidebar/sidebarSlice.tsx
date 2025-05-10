import { createSlice } from "@reduxjs/toolkit";

interface ISidebar {
  open: boolean;
}

const initialState: ISidebar = {
  open: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const { openSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
