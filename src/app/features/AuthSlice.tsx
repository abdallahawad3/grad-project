import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { axiosInstance } from "@/config/axios.config";

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
}

const loginUser = createAsyncThunk(
  "loginUser",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", userData);
      console.log(data);
      console.log(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: UserState = {
  data: {
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
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction) => {
      // state.data = action.payload.data;
      // state.token = action.payload.token;
      console.log(state.data);
      console.log(action);
    });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default authSlice.reducer;
