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
      if (
        state.cartItems.some((item) => item.pizzaId === action.payload.pizzaId)
      ) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.pizzaId === action.payload.pizzaId) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
              totalPrice:
                item.unitPrice * (item.quantity + action.payload.quantity),
            };
          }
          return item;
        });
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    incrementItemQuantity(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.unitPrice * (item.quantity + 1),
          };
        }
        return item;
      });
    },
    decrementItemQuantity(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.pizzaId === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.unitPrice * (item.quantity - 1),
          };
        }
        return item;
      });
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
