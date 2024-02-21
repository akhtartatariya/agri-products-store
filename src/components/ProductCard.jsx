import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updatedPriceAndWeight } from "../store/cartSlice";
//Router
import { useNavigate } from "react-router";

//Toast
import { toast } from "react-toastify";

function ProductCard({ products }) {
  const [price, setPrice] = useState({});
  const [weight, setWeight] = useState({});

  //Fetch data From Store
  const userStatus = useSelector((state) => state.auth.status);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [productStates, setProductStates] = useState({});

  useEffect(() => {
    const initialPrices = {};
    const initialWeights = {};

    products.forEach((item) => {
      initialPrices[item.id] = item.price._50g;
      initialWeights[item.id] = item.weight._50g;
    });

    setPrice(initialPrices);
    setWeight(initialWeights);
  }, [products]);

  //calculate the price in this function
  const calculatePrice = (productId, selectedWeight) => {
    const product = products.find((p) => p.id === productId);
    return selectedWeight === "50g" ? product.price._50g : product.price._250g;
  };
  const calculateWeight = (productId, selectedWeight) => {
    const product = products.find((p) => p.id === productId);
    return selectedWeight === "50g"
      ? product.weight._50g
      : product.weight._250g;
  };

  const handleWeightChange = (productId, e) => {
    const selectedWeight = e.target.value;

    setPrice((prevPrices) => ({
      ...prevPrices,
      [productId]: calculatePrice(productId, selectedWeight),
    }));

    setWeight((prevWeights) => ({
      ...prevWeights,
      [productId]: calculateWeight(productId, selectedWeight),
    }));
  };

  const handleAddToCart = (product) => {
    const selectedWeight = weight[product.id];
    const updatedPrice =
      selectedWeight === "50g" ? product.price._50g : product.price._250g;
    const updatedWeight =
      selectedWeight === "50g" ? product.weight._50g : product.weight._250g;

    const existingProductIndex = cart.cartItems.findIndex(
      (item) => item.id === product.id && item.weight === selectedWeight
    );

    if (existingProductIndex !== -1) {
      // If the product is in the cart, update the quantity
      const updatedCartItems = cart.cartItems.map((item) => {
        if (item.id === product.id && item.weight === selectedWeight) {
          return {
            ...item,
            cartQuantity: item.cartQuantity + 1,
          };
        }
        return item;
      });

      dispatch(
        updatedPriceAndWeight({
          itemId: product.id,
          newPrice: { [product.id]: updatedPrice },
          newWeight: { [product.id]: updatedWeight },
        })
      );

      dispatch({
        type: "cart/updateCart",
        payload: updatedCartItems,
      });
    } else {
      // If the product is not in the cart, add it as a new item
      const updatedProduct = {
        ...product,
        price: { [product.id]: updatedPrice },
        weight: { [product.id]: updatedWeight },
        cartQuantity: 1,
      };

      dispatch(addToCart(updatedProduct));
      dispatch(
        updatedPriceAndWeight({
          itemId: product.id,
          newPrice: { [product.id]: updatedPrice },
          newWeight: { [product.id]: updatedWeight },
        })
      );
    }

    navigate("/cart");
  };

  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="w-[15rem] h-[28rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative text-xs flex flex-col justify-between bg-white"
            key={product.id}
          >
            <div className="py-2 px-3 flex flex-col gap-6">
              <div className="flex justify-center">
                <img
                  src={product.product_img}
                  alt={product.product_name}
                  className="max-w-44 max-h-36"
                />
              </div>
              <div className="flex flex-col justify-between h-20">
                <h2 className="font-bold text-2xl">{product.product_name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {product.product_desc}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <hr className="h-[0.02rem] bg-gray-600 w-full" />
                <div className="flex justify-between font-bold">
                  <span>List Price</span>
                  <span>€{price[product.id]}</span>
                </div>
                <p className="text-gray-600">VAT included.</p>
              </div>
              <div>
                <select
                  name="weight"
                  id={`weight-${product.id}`}
                  className="w-full outline-none border border-black p-2 rounded-sm"
                  onChange={(e) => handleWeightChange(product.id, e)}
                >
                  <option value={product.weight._50g}>
                    {product.weight._50g}
                  </option>
                  <option value={product.weight._250g}>
                    {product.weight._250g}
                  </option>
                </select>
              </div>
              <img
                src="../img/Pioneer_Logo.jpg"
                alt="Pioneer Logo"
                className="w-11 absolute top-4 left-2"
              />
            </div>

            <div
              className="bg-green-800 text-white font-bold h-9 flex items-center justify-center cursor-pointer"
              onClick={
                userStatus
                  ? () => handleAddToCart(product)
                  : () => {
                      navigate("/login");
                      toast.error("Please Login First", {
                        position: "top-right",
                      });
                    }
              }
            >
              <h2>ADD TO CART</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
