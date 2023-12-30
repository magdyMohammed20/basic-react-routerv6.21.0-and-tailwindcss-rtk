import { createSlice } from "@reduxjs/toolkit";

const addToCart = (state, action) => {
  const isProductNotExist =
    state.cart.find((item) => item.id === action.payload.id) === undefined;

  if (isProductNotExist) {
    state.cart.push({ ...action.payload, quantity: 1 });
  } else {
    state.cart.forEach((product, index) => {
      console.log(product);
      if (product.id == action.payload.id) {
        state.cart[index] = {
          ...product,
          quantity: product.quantity + 1,
        };
      }
    });
  }
  state.totalQuantity = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
};

const removeFromCart = (state, action) => {
  state.cart = state.cart.filter(
    (cartItem) => cartItem.id !== action.payload.id
  );

  // ReCalculate Total Quantity
  state.totalQuantity = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // ReCalculate Total Price
  state.totalPrice = state.cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
};

const getTotalQuan = (state) => {
  state.totalQuantity = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
};

const getTotPrice = (state) => {
  state.totalPrice = state.cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
};

const cartSlice = createSlice({
  name: "cart-slice",
  initialState: {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    add: addToCart,
    remove: removeFromCart,
    getTotalQuantity: getTotalQuan,
    getTotalPrice: getTotPrice,
  },
});

const { reducer, actions } = cartSlice;

export const { add, remove, getTotalQuantity, getTotalPrice } = actions;

export default reducer;
