import React, { useState } from "react";
import Title from "../components/Title";
import LoginInput from "../components/FormStuff/LoginInput";
import Button from "../components/FormStuff/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../firebase/auth_service";
const AdminSignup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [Error, setError] = useState("");
  const [confpass, setConfpass] = useState("");
  const submit = async (data) => {
    setError("");
    const confirm = confpass === data.password;
    try {
      if (confirm) {
        const { password, fullName, email } = data;
        const account = await authService.signUp(fullName, email, password);
        if (account) {
          const userData = await authService.getCurrentUser();
          if (userData) {
            navigate("/login");
          }
        }
      } else {
        setError("Passwords do not match");
      }
    } catch (error) {
      console.log(":: error while signing up", error);
      setError(error.message);
      console.log(Error);
    }
  };
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Admin Signup
      </div>
      <div className="sm:min-h-screen min-h-[700px] flex justify-center items-center bg-gray-50">
        <div className="bg-white p-6 md:p-10 sm:w-full max-w-md shadow rounded-lg">
          <div>
            <Title
              text="Admin Signup"
              className="sm:text-4xl text-3xl text-center mb-6 text-green-800 font-bold"
            />
            <h4 className="text-center sm:text-2xl text-xl font-semibold">
              Enter Your Credentials
            </h4>
            <Link to={"/signup/user"}>
              <span className="flex justify-center mt-4 font-medium cursor-pointer text-green-800">
                signup as user, click here
              </span>
            </Link>
            {Error && <p className="text-red-600 mt-4 text-center">{Error}</p>}
            <form onSubmit={handleSubmit(submit)}>
              <LoginInput
                label="Name"
                placeholder="Enter your name"
                classes=" mt-6"
                input_outline_color="outline-green-800"
                {...register("fullName", { required: true })}
              />
              <LoginInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                input_outline_color="outline-green-800"
                classes="mb-4 mt-4"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <LoginInput
                label="Password"
                type="password"
                classes="mt-4"
                placeholder="Enter your password"
                input_outline_color="outline-green-800"
                {...register("password", { required: true })}
              />
              <LoginInput
                label="Confirm Password"
                type="password"
                classes="mt-4 mb-6"
                placeholder="Enter your password again"
                input_outline_color="outline-green-800"
                value={confpass}
                onChange={(e) => setConfpass(e.target.value)}
              />
              <div className="flex justify-between">
                <Button
                  children="SignUp"
                  type="submit"
                  className=" bg-green-800 text-white px-4 py-2 rounded-md"
                />
                <Link to="/login/admin">
                  <Button
                    children="Login"
                    type="button"
                    className="bg-[#0073cf] text-white px-4 py-2 rounded-md"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignup;
