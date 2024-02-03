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
      const { id, price, weight, product_name, product_desc, product_img } =
        action.payload;

      console.log(state.cartItems);

      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.weight[id] === weight[id]
      );

      if (existingItem) {
        // If the product with the same id and weight is already in the cart, update the quantity
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === id && item.weight[id] === weight[id]) {
            return {
              ...item,
              cartQuantity: item.cartQuantity + 1,
            };
          }
          return item;
        });

        toast.info(`Increased ${existingItem.product_name} quantity`, {
          position: "top-right",
        });

        state.cartItems = updatedCartItems;
      } else {
        // If the product is not in the cart, add it as a new item
        state.cartItems.push({
          id,
          price,
          weight,
          cartQuantity: 1,
          product_name,
          product_desc,
          product_img,
        });

        toast.success(`${product_name} added to Cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { id, weight } = action.payload;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === id && cartItem.weight[id] === weight[id]
      );

      if (existingItem) {
        // If the product with the same id and weight is in the cart, update the quantity
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === id && item.weight[id] === weight[id]) {
            return {
              ...item,
              cartQuantity: item.cartQuantity - 1,
            };
          }
          return item;
        });

        // Filter out items with cartQuantity <= 0
        const filteredCartItems = updatedCartItems.filter(
          (item) => item.cartQuantity > 0
        );

        state.cartItems = filteredCartItems;

        toast.info(`Decreased ${existingItem.product_name}'s cart quantity`, {
          position: "top-right",
        });
      } else {
        // If the product is not in the cart, handle it accordingly (you may keep the existing code)
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== id
        );
        state.cartItems = updatedCartItems;
        toast.error(`${action.payload.product_name} removed from cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updatedPriceAndWeight: (state, action) => {
      const { itemId, newPrice, newWeight } = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === itemId && item.weight === newWeight[itemId][item.id]) {
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

      localStorage.setItem("cartItems", JSON.stringify(updatedState.cartItems));

      return updatedState;
    },

    decreaseCartQuantity: (state, action) => {
      const { id, weight } = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === id && cartItem.weight[id] === weight[id]
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];

        if (existingItem.cartQuantity > 1) {
          // If quantity > 1, update the quantity
          state.cartItems[existingItemIndex].cartQuantity -= 1;

          toast.info(`Decreased ${existingItem.product_name}'s cart quantity`, {
            position: "top-right",
          });
        } else {
          // If quantity is 1, remove the item
          state.cartItems.splice(existingItemIndex, 1);

          toast.error(`${existingItem.product_name} removed from cart`, {
            position: "top-right",
          });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
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
