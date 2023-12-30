import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = {
  IDLE: "idle",
  LOADING: "Loading",
  ERROR: "error",
};

const productSlice = createSlice({
  name: "product-slice",
  initialState: {
    products: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.products = action.payload;
        console.log(state, action);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
