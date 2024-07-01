import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //   if (state.cart.find((item) => item.pizzaId === action.payload.pizzaId))
      //     return;
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incrementItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decrementItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, incrementItem, decrementItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

const selectorItem = (state) => state.cart.cart;

export const totalCartitems = createSelector([selectorItem], (cartItems) =>
  cartItems.reduce((acc, val) => acc + val.quantity, 0),
);

export const totalPrice = createSelector([selectorItem], (cartItem) =>
  cartItem.reduce((acc, val) => acc + val.quantity * val.unitPrice, 0),
);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
