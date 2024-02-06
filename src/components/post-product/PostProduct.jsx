import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../FormStuff/Button";
import Input from "../FormStuff/Input";
import storageService from "../../firebase/storage_service";
import productService from "../../firebase/product_service";
import { useNavigate } from "react-router-dom";
import Select from "../FormStuff/Select";
const PostProduct = ({ product }) => {
  const [weight_50, setWeight_50] = useState("");
  const [weight_250, setWeight_250] = useState("");
  useEffect(() => {
    setWeight_50("50g");
    setWeight_250("250g");
  }, []);

  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      product_name: product?.name || "",
      product_desc: product?.desc || "",
      category: product?.category || "",
      technology: product?.technology || "",
      price: {
        _50g: product?.price._50g || "",
        _250g: product?.price._250g || "",
      },
      weight: {
        _50g: product?.weight._50g || "",
        _250g: product?.weight._50g || "",
      },
    },
  });
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
    const file = data.image[0]
      ? await storageService.uploadFile(data.image[0])
      : null;
    const product = await productService.addProduct({
      ...data,
      product_img: file,
    });
    if (product) {
      navigate("/");
    }
    // console.log(data.image[0]);
    // if (product) {
    //   const file = data.image[0]
    //     ? await storageService.uploadFile(data.image[0])
    //     : null;
    //   if (file) {
    //     await storageService.deleteFile(product.product_img);
    //   }
    //   const dbProduct = await productService.updateProduct(product.id, {
    //     ...data,
    //     product_img: file ? file.id : undefined,
    //   });
    //   if (dbProduct) {
    //     // navigate(`/products/${dbProduct.id}`)
    //   }
    // } else {
    //   if (data.image[0]) {
    //     const file = await storageService.uploadFile(data.image[0]);
    //     if (file) {
    //       const dbProduct = await productService.addProduct({ ...data });
    //       if (dbProduct) {
    //         // navigate(`/products/${dbProduct.id}`)
    //       }
    //     }
    //   }
    // }
  };

  return (
    <>
      <form
        className="bg-gray-100 text-gray-800 p-8 rounded-lg max-w-3xl mx-auto"
        onSubmit={handleSubmit(submit)}
      >
        <div className="space-y-8">
          <div className="border-b border-gray-400 pb-8">
            <h2 className="text-2xl font-semibold mb-2">Add Product</h2>
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
                htmlFor="product-category"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Category
              </label>
              <div className="mt-2">
                <Select
                  id="product-category"
                  name="product-category"
                  options={[
                    "Corn",
                    "Multiforage",
                    "Grass",
                    "Pastone",
                    "Alfalfa",
                  ]}
                  {...register("category", { required: true })}
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
                  options={["Fiber ", "Standard", "Rapid React"]}
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
            </div>
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="bg-[#0073cf] text-white px-4 py-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostProduct;

{/* <div className="flex items-center justify-center w-full">
  <div
    className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
  >
    <div className="mb-2 flex justify-center">
      <span className="inline-block w-full max-w-[100px]"></span>
    </div>
    <h2 className="mb-2 text-center text-2xl font-bold leading-tight">
      Add Product
    </h2>
    <hr />
    <form className="mt-8" onSubmit={handleSubmit(submit)}>
      <div className="space-y-5">
        <Input
          label={"Product Name"}
          type={"text"}
          placeholder={"Enter Product Name"}
          className="mb-4 mt-8 outline-[#0073cf] block "
          {...register("product_name", { required: true })}
        />

        <Input
          label={"Product Description"}
          type={"text"}
          placeholder={"Enter Product Description"}
          className="mt-4 mb-10 outline-[#0073cf] block"
          input_outline_color={""}
          {...register("product_desc", { required: true })}
        />
        <label htmlFor="" className="font-semibold block">
          Product Details :{" "}
        </label>
        <label htmlFor="weight50g">Weight (50g):</label>
        <Input
          type="text"
          id="weight50g"
          name="weight50g"
          required
          value={weight_50}
          {...register("weight._50g", { required: true })}
        />
        <br />

        <label htmlFor="weight250g">Weight (250g):</label>
        <Input
          type="text"
          id="weight250g"
          name="weight250g"
          required
          value={weight_250}
          {...register("weight._250g", { required: true })}
        />
        <br />
        <label htmlFor="price50g">Price (50g) : </label>
        <Input
          type="number"
          step="0.01"
          id="price50g"
          name="price50g"
          required
          {...register("price._50g", { required: true })}
        />
        <br />

        <label htmlFor="price250g">Price (250g) : </label>
        <Input
          type="number"
          step="0.01"
          id="price250g"
          name="price250g"
          required
          {...register("price._250g", { required: true })}
        />
        <br />

        <Select
          className="mb-2"
          label="Category : "
          options={["Corn", "Multiforage", "Grass", "Pastone", "Alfalfa"]}
          {...register("category", { required: true })}
        />
        <Select
          className="mb-2"
          label="Technology : "
          options={["Fiber ", "Standard", "Rapid React"]}
          {...register("technology", { required: true })}
        />
        <label htmlFor="" className=" font-semibold block">
          Choose Image :
        </label>
        <Input
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: true })}
        />
        {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Img Preview"
                  className=" max-w-[200px] max-h-[200px]"
                />
              )}
        <br />

        <Button
          children="Add"
          type={"submit"}
          className={"bg-[#0073cf] w-full text-white px-4 py-2 rounded-md"}
        />
      </div>
    </form>
  </div>
</div>; */}
