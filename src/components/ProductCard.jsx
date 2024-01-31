import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
//Toast
import { toast } from "react-toastify";

function ProductCard({ products }) {
  const [price, setPrice] = useState({});

  //calculate the price in this function
  const calculatePrice = (productId, selectedWeight) => {
    const product = products.find((p) => p.id === productId);
    return selectedWeight === "50g" ? product.price._50g : product.price._250g;
  };

  const handleWeightChange = (productId, e) => {
    const selectedWeight = e.target.value;
    //call the calculate function
    const updatedPrice = calculatePrice(productId, selectedWeight);

    setPrice((prevPrices) => ({
      ...prevPrices,
      [productId]: updatedPrice,
    }));
  };

  // console.log(price);

  //Add to Cart Reducer
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  //Fetch data From Store
  const userStatus = useSelector((state) => state.auth.status);

  return (
    <>
      {products.map((product) => {
        console.log(`${product.product_img}`);

        return (
          <div
            className="w-[15rem] h-[28rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative text-xs flex flex-col justify-between"
            key={product.id}
          >
            <div className="py-2 px-3 flex flex-col gap-6">
              <div className="flex justify-center">
                <img
                  src={product.product_img}
                  alt={product.product_name}
                  className=" w-44"
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
                  <span>
                    €
                    {price[product.id] ? price[product.id] : product.price._50g}
                  </span>
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
                  : () =>
                      toast.error("Please Login First", {
                        position: "top-right",
                      })
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
