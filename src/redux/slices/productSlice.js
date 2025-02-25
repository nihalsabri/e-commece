import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});

const productSlice = createSlice({
  name: "products",
  initialState: { products: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => { state.loading = false; });
  }
});

export default productSlice.reducer;
