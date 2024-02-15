import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostProduct from "../components/post-product/PostProduct";
import productService from "../firebase/product_service";

const EditProduct = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    productService.getProduct(slug).then((product)=>{
      setProduct(product);
    //   console.log(product)
    })
  }, [navigate, slug]);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Edit Product
      </div>
      <PostProduct product={product}/>
    </>
  );
};

export default EditProduct;
