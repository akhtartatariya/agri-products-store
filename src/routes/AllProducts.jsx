import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../firebase/product_service";
import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import adminLogo from "../components/FormStuff/admin-user-web-svgrepo-com.svg";
import { toast } from "react-toastify";
import storageService from "../firebase/storage_service";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.auth.userData);
  useEffect(() => {
    productService.getAllProducts().then((product) => {
      setProducts(product);
      console.log(product);
    });
  }, []);
  const deleteProduct = async (productId, productImage) => {
    const deletedProduct = await productService.deleteProduct(productId);
    if (deletedProduct) {
      await storageService.deleteFile(productImage);
    }

    // Update the state to remove the deleted product
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    if (deletedProduct) {
      toast.success("Product Deleted Successfully");
    }
  };
  return (
    <div className="min-h-screen">
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ All Products
      </div>
      {!products ? (
        <div className="mx-4 md:mx-10">
          <div className="text-3xl text-center my-10">No Products Found</div>
        </div>
      ) : null}
      <div className="mx-4 md:mx-10 transition-all">
        <div>
          <h1 className="text-3xl text-center my-4">All Products</h1>
        </div>
        <div>
          <div className="logo p-3 text-center">
            <Link to={"/"}>
              <img src={adminLogo} alt="" className="max-w-[150px] inline" />
            </Link>
          </div>
          <div className="parent-container rounded-xl bg-gray-50">
            <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 place-content-center bg-gray-300">
              <h3 className="font-semibold uppercase">Id</h3>
              <h3 className="font-semibold uppercase">Product Image</h3>
              <h3 className="font-semibold uppercase">Product Name</h3>
              <h3 className="font-semibold uppercase">Actions</h3>
            </div>
            {products?.map((product) => (
              <React.Fragment key={product.id}>
                <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="product-id">
                    <p>{product.id}</p>
                  </div>
                  <div className="product-img">
                    <img
                      src={product.product_img}
                      alt={product.product_name}
                      className="max-w-[100px]"
                    />
                  </div>
                  <div className="product-detail text-gray-500 font-semibold">
                    <p className="my-1 text-lg">{product.product_name}</p>
                    <p>{product.product_desc}</p>
                  </div>
                  {user && product && user.uid === product.userId ? (
                    <div className="product-actions flex justify-center md:justify-start">
                      <Link to={`/edit-product/${product.id}`}>
                        <button className="p-2 m-2 border-2 border-gray-600 rounded-md text-base text-gray-600/100 font-semibold hover:bg-gray-600 hover:text-white">
                          <FiEdit
                            data-ripple-light="true"
                            data-tooltip-target="tooltip-top"
                          />
                        </button>
                      </Link>
                      <button
                        className="p-2 m-2 border-2 border-gray-600 rounded-md text-base text-gray-600/100 font-semibold hover:bg-gray-600 hover:text-white"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <FiDelete />
                      </button>
                    </div>
                  ) : (
                    false
                  )}
                </div>
                <hr className="md:hidden" />
              </React.Fragment>
            ))}
          </div>
          <div className="p-4 text-center md:text-left">
            <button className="p-4 border-2 border-gray-500 rounded-lg font-semibold text-gray-600/100">
              Clear Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
