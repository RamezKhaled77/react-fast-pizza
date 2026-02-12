import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // NOTE - Payload need to be a newItem object
      const existingItem = state.cartItems.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.unitPrice * existingItem.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action) {
      // NOTE - Payload need to be a pizzaId
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    incrementItemQuantity(state, action) {
      // NOTE - Payload need to be a pizzaId
      const item = state.cartItems.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decrementItemQuantity(state, action) {
      // NOTE - Payload need to be a pizzaId
      const item = state.cartItems.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
  },
});

export const getCart = (state) => state.cart.cartItems;

export const getIsItemInCart = (id) => (state) =>
  state.cart.cartItems.some((item) => item.pizzaId === id);

export const getTotalCartQuantity = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

export const {
  addItem,
  removeItem,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
