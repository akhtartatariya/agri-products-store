import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("State:", state);
      console.log("Action:", action);

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].product_name} quantity`,
          {
            position: "top-right",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.product_name} added to Cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.product_name} removed from cart`, {
        position: "top-right",
      });
    },
    updatedPriceAndWeight: (state, action) => {
      const { itemId, newPrice, newWeight } = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            price: newPrice,
            weight: newWeight,
          };
        }
        return item;
      });

      const updatedState = {
        ...state,
        cartItems: updatedCartItems,
      };

      console.log(action.payload);

      localStorage.setItem("cartItems", JSON.stringify(updatedState.cartItems));

      return updatedState;
    },
    decreaseCartQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Decreased ${action.payload.product_name}'s cart quantity`, {
          position: "top-right",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
        toast.error(`${action.payload.product_name} removed from cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      toast.error(`Cleared Cart`, {
        position: "top-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { cartQuantity } = cartItem;
          const price = cartItem.price[cartItem.id];
          console.log(cartItem.price[cartItem.id]);
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      console.log(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updatedPriceAndWeight,
  decreaseCartQuantity,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
