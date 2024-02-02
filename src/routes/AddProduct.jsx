import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import FormGroup from "../components/FormGroup";
import Button from "../components/FormStuff/Button";
import Input from "../components/FormStuff/Input";

const AddProduct = () => {
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Add-Product
      </div>

      <div className="flex items-center justify-center w-full">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]"></span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Add Product
          </h2>

          <form className="mt-8">
            <div className="space-y-5">
              <FormGroup
                label={"Product Name"}
                type={"text"}
                placeholder={"Enter Product Name"}
                classes={"mb-4 mt-8"}
                input_outline_color={"outline-[#0073cf]"}
              />

              <FormGroup
                label={"Product Description"}
                type={"text"}
                placeholder={"Enter Product Description"}
                classes={"mt-4 mb-10"}
                input_outline_color={"outline-[#0073cf]"}
              />
              <label htmlFor="" className="font-semibold block">
                Product Weight :{" "}
              </label>
              
              <br />
              <label for="price50g">Price (50g) : </label>
              <input
                type="number"
                step="0.01"
                id="price50g"
                name="price50g"
                required
              />
              <br />

              <label for="price250g">Price (250g) : </label>
              <input
                type="number"
                step="0.01"
                id="price250g"
                name="price250g"
                required
              />
              <br />
              <label for="weight50g">Weight (50g):</label>
              <input type="text" id="weight50g" name="weight50g" required />
              <br />

              <label for="weight250g">Weight (250g):</label>
              <input type="text" id="weight250g" name="weight250g" required />
              <br />
              <label htmlFor="" className=" font-semibold block">
                Choose Image :
              </label>
              <Input type="file" />

              <br />
              
              <Button
                children="Add"
                type={"submit"}
                className={
                  "bg-[#0073cf] w-full text-white px-4 py-2 rounded-md"
                }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
