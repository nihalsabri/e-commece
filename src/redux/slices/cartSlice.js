import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      
    },
    increaseQuantity: (state, action) => {
      const product = state.cartItems.find((item) => item.id === action.payload);
      if (product) product.quantity += 1;
      
    },
    decreaseQuantity: (state, action) => {  
      const product = state.cartItems.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
