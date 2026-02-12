import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: "Vegetale",
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
  ],
  subTotal: 0,
  tax: 0,
  total: 0,
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

export const getIsItemInCart = (id) => (state) =>
  state.cart.cartItems.some((item) => item.pizzaId === id);

export const {
  addItem,
  removeItem,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
