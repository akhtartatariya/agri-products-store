import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import storageService from "../../firebase/storage_service";
import productService from "../../firebase/product_service";
import { useNavigate } from "react-router-dom";
import Select from "../FormStuff/Select";
import { toast } from "react-toastify";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { fireDB } from "../../firebase/config";
import { useSelector } from "react-redux";
const PostProduct = ({ product }) => {
  // console.log(product);
  const [weight_50, setWeight_50] = useState("");
  const [weight_250, setWeight_250] = useState("");
  useEffect(() => {
    setWeight_50("50g");
    setWeight_250("250g");
  }, []);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData?.uid);
  console.log(user);
  const { register, handleSubmit, setValue } = useForm({
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
        _50g: product?.weight._50g || "",
        _250g: product?.weight._50g || "",
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

  async function getMaxProductId() {
    try {
      const productRef = collection(fireDB, "products");
      // console.log(productRef)
      const maxIdQuery = query(
        productRef,
        orderBy("productId", "desc"),
        limit(1)
      );
      // console.log(maxIdQuery)
      const querySnapshot = await getDocs(maxIdQuery);
      console.log("Query Snapshot:", querySnapshot.docs);
      if (querySnapshot.empty) {
        // No products in the collection yet
        // console.log(querySnapshot)
        return 0;
      } else {
        // Get the current maximum product ID
        const maxProductId = querySnapshot.docs[0].data().productId;
        console.log(maxProductId);
        return maxProductId;
      }
    } catch (error) {
      console.error("Error getting max product ID:", error);
      throw error;
    }
  }

  // Function to generate a new product ID
  async function generateNewProductId() {
    const maxProductId = await getMaxProductId();
    // console.log(maxProductId)
    let newProductId = Number(maxProductId) + 1;
    // console.log(newProductId)
    return String(newProductId);
  }
  const submit = async (data) => {
    // console.log(data);
    const hasImage = data.image && data.image.length > 0;
    if (product) {
      let updatedData = { ...data };

      if (hasImage) {
        // Check if the image URL already exists
        const existingImageUrl = await storageService.checkExistingImage(
          data.image[0].name
        );

        if (existingImageUrl) {
          // Image already exists, use the existing URL
          updatedData = { ...updatedData, product_img: existingImageUrl };
        } else {
          // Upload the new image file
          const file = data.image[0];
          const downloadURL = await storageService.uploadFile(file);

          // Delete the previous product image
          if (product.product_img) {
            await storageService.deleteFile(product.product_img);
          }

          // Update the product with the new image URL
          updatedData = { ...updatedData, product_img: downloadURL };
        }
      }

      // Update the product in the database
      const dbProduct = await productService.updateProduct(
        product.id,
        updatedData
      );

      if (dbProduct) {
        toast.success("Product Updated Successfully");
        navigate("/all-products");
      }
    } else {
      const file = hasImage
        ? await storageService.uploadFile(data.image[0])
        : null;
      if (file) {
        // Add the new product to the database
        // Generate a new product ID
        const newProductId = await generateNewProductId();
        const newProduct = await productService.addProduct({
          ...data,
          product_img: file,
          productId: newProductId,
          userId: user,
        });
        console.log(newProduct);
        if (newProduct) {
          toast.success("Product Added Successfully");
          navigate("/all-products");
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
                  {...register("weight._50g", { required: false })}
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
                  {...register("weight._250g", { required: false })}
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
              <div className="mt-2 flex flex-col items-center sm:flex-row sm:items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <input
                  type="file"
                  name="product-image"
                  id="product-image"
                  accept="image/*"
                  className="w-full max-w-xs p-2 border rounded-md focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register("image", { required: true })}
                />
                {product && (
                  <img
                    src={product.product_img}
                    alt=""
                    className="max-w-[200px] max-h-[200px] rounded-md"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className=" w-full  bg-[#0073cf] text-white px-4 py-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
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
