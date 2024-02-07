import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../firebase/product_service";
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productService.getAllProducts().then((product) => {
      setProducts(product);
      console.log(product);
    });
  }, []);
  const handleDelete=async(productId)=>{
    await productService.deleteProduct(productId)
  }
  return (
    <div className="min-h-screen">
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ All Products
      </div>
      {!products ? (
        <div className="mx-10">
          <div className="text-3xl text-center my-10">No Products Found</div>
        </div>
      ) : null}
      <div className="mx-10 transition-all">
        <div>
          <h1 className="text-3xl text-center my-4">All Products</h1>
        </div>
        <div>
          <div className="logo p-3">
            <Link to={"/"}>Logo</Link>
          </div>
          <div>
            <div className="parent-container">
              <div className=" p-8 grid grid-rows-1 md:grid-cols-4 gap-[1fr] place-content-center">
                <h3 className="font-semibold uppercase">Id</h3>
                <h3 className="font-semibold uppercase">Product Image</h3>
                <h3 className="font-semibold uppercase">product Name</h3>

                <h3 className="font-semibold uppercase">actions</h3>
              </div>
              <hr />
              {products?.map((product) => (
                <div
                  className="p-8 grid grid-rows-1 md:grid-cols-4 gap-[1fr] items-center"
                  key={product.id}
                >
                  <div className="product-id">
                    <p>{product.id}</p>
                  </div>
                  <div className="product-img ">
                    <img
                      src={product.product_img}
                      alt={product.product_name}
                      className="max-w-[100px]"
                    />
                  </div>
                  <div className="product-detail text-gray-500 font-semibold">
                    <p className=" my-1 text-lg">{product.product_name}</p>
                    <p>{product.product_desc}</p>
                    {/* <p>{product.weight}</p> */}
                  </div>

                  <div className="product-actions">
                    <Link to={`/edit-product/${product.id}`}>
                      <button className="p-2 m-2 border-2 border-gray-600 rounded-md text-base text-gray-600/100 font-semibold hover:bg-gray-600 hover:text-white">
                        <FiEdit
                          data-ripple-light="true"
                          data-tooltip-target="tooltip-top"
                        />
                      </button>
                    </Link>
                    <button className="p-2  border-2 border-gray-600 rounded-md text-base text-gray-600/100 font-semibold hover:bg-gray-600 hover:text-white" onClick={() => handleDelete(product.id)}>
                      <FiDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8">
              <button className=" p-4 border-2 border-gray-500 rounded-lg font-semibold text-gray-600/100">
                Clear Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
