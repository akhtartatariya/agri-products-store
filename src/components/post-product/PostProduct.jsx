import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../FormStuff/Button";
import Input from "../FormStuff/Input";
import storageService from "../../firebase/storage_service";
import productService from "../../firebase/product_service";
import { useNavigate } from "react-router-dom";
import Select from "../FormStuff/Select";
const PostProduct = ({ product }) => {
  console.log(product);
  const [weight_50, setWeight_50] = useState("");
  const [weight_250, setWeight_250] = useState("");
  useEffect(() => {
    setWeight_50("50g");
    setWeight_250("250g");
  }, []);

  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      product_name: product?.product_name || "",
      product_desc: product?.product_desc || "",
      used_for: product?.used_for || "Corn",
      technology: product?.technology || "FiberTechnology",
      price: {
        _50g: product?.price?._50g || "",
        _250g: product?.price?._250g || "",
      },
      weight: {
        _50g: product?.weight?._50g || "",
        _250g: product?.weight?._50g || "",
      },
    },
  });
  useEffect(() => {
    if (product) {
      setValue("product_name", product.product_name || "");
      setValue("product_desc", product.product_desc || "");
      setValue("used_for", product.used_for || "Corn");
      setValue("technology", product.technology || "FiberTechnology");
      setValue("price._50g", product.price?._50g || "");
      setValue("price._250g", product.price?._250g || "");
      setValue("weight._50g", product.weight?._50g || "");
      setValue("weight._250g", product.weight?._250g || "");
    }
  }, [product, setValue]);
  // const [imagePreview, setImagePreview] = useState(null);
  // const handleImageChange = (e) => {
  //   if (e.target.files[0]) {
  //     const selectedImage = e.target.files[0];

  //     console.log(selectedImage);
  //     setValue("image", selectedImage);
  //     setImagePreview(URL.createObjectURL(selectedImage));
  //   }
  // };
  const submit = async (data) => {
    console.log(data);
    if (product) {
      const file =
        data.image[0]
          ? await storageService.uploadFile(data.image[0])
          : null;
      if (file) {
        await storageService.deleteFile(product.product_img);
      }
      const dbProduct = await productService.updateProduct(product.id, {
        ...data,
        product_img: file,
      });

      if (dbProduct) {
        navigate("/");
      }
    } else {
      const file = data.image[0]
        ? await storageService.uploadFile(data.image[0])
        : null;
      if (file) {
        const newProduct = await productService.addProduct({
          ...data,
          product_img: file,
        });
        if (newProduct) {
          navigate("/");
        }
      }
    }
  };

  return (
    <>
      <form
        className="bg-gray-100 text-gray-800 p-8 rounded-lg max-w-3xl mx-auto"
        onSubmit={handleSubmit(submit)}
      >
        <div className="space-y-8">
          <div className="border-b border-gray-400 pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              {product ? "Edit Product" : "Add Product"}
            </h2>
            <p className="text-sm text-gray-600">
              Provide details about the product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="product-name"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="block w-full rounded-md border-gray-300 px-3 py-2 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  {...register("product_name", { required: true })}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="product-description"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Product Description
              </label>
              <div className="mt-2">
                <textarea
                  name="product-description"
                  id="product-description"
                  rows="3"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  {...register("product_desc", { required: true })}
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="product-price-50g"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Price (50g)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.01"
                  name="product-price-50g"
                  id="product-price-50g"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  {...register("price._50g", { required: true })}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="product-price-250g"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Price (250g)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  step="0.01"
                  name="product-price-250g"
                  id="product-price-250g"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  {...register("price._250g", { required: true })}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="product-weight-50g"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Weight (50g)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="product-weight-50g"
                  id="product-weight-50g"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  value={weight_50}
                  {...register("weight._50g", { required: true })}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="product-weight-250g"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Weight (250g)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="product-weight-250g"
                  id="product-weight-250g"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  value={weight_250}
                  {...register("weight._250g", { required: true })}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="product-used_for"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Used_for
              </label>
              <div className="mt-2">
                <Select
                  id="product-used_for"
                  name="product-used_for"
                  options={[
                    "Corn",
                    "Multiforage",
                    "Grass",
                    "Pastone",
                    "Alfalfa",
                  ]}
                  required
                  {...register("used_for", { required: true })}
                ></Select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="product-technology"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Technology
              </label>
              <div className="mt-2">
                <Select
                  id="product-technology"
                  name="product-technology"
                  options={["FiberTechnology", "Standard", "RapidReact"]}
                  required
                  {...register("technology", { required: true })}
                ></Select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="product-image"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Choose Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="product-image"
                  id="product-image"
                  accept="image/*"
                  className="block w-full rounded-md border-gray-300 py-2 placeholder-gray-400 focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
                  {...register("image", { required: true })}
                />
              </div>
              {product && (
                <img
                  src={product.product_img}
                  alt=""
                  className=" max-w-[200px] max-h-[200px]"
                />
              )}
            </div>
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="bg-[#0073cf] text-white px-4 py-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {product ? "Update Product" : "Add Product "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostProduct;

{
  /*
        {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Img Preview"
                  className=" max-w-[200px] max-h-[200px]"
                />
              )}
        <br />

          */
}
