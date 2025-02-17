import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        console.log(state);

        state.items[itemIndex].quantity++;
        state.items[itemIndex].totalPrice =
          state.items[itemIndex].price * state.items[itemIndex].quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
        state.items[itemIndex].totalPrice =
          state.items[itemIndex].price * state.items[itemIndex].quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
