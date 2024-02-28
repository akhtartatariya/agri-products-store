import React, { useState } from "react";
import Title from "../components/Title";
import authService from "../firebase/auth_service";
import { useDispatch } from "react-redux";
import LoginInput from "../components/FormStuff/LoginInput";
import Button from "../components/FormStuff/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login as authLogin, logout } from "../store/authSlice";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submit = async (data) => {
    setError("");
    try {
      const account = await authService.login(data);
      if (account) {
        const user = await authService.getCurrentUser();
        const userData = {
          uid: account.user.uid,
          email: account.user.email,
          displayName: account.user.displayName,
        };
        const isAdmin = await authService.isAdmin();
        if (!isAdmin) {
          dispatch(authLogin({ userData }));
          localStorage.setItem("user", JSON.stringify(userData));
          navigate("/");
        } else {
          setError("Admins should log in from the admin login page");
          authService.logout().then(()=>{
            dispatch(logout());
            localStorage.clear("user");
          })
        }
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error while submitting login form", error);
      setError(error.message || "unexpected error");
      // console.error("Error while submitting login form", error);
      if (error.code) {
        // Map Firebase error codes to custom error messages
        const customErrorMessages = {
          "auth/invalid-credential": `Invalid credentials. Please check your email and password.`,
          // Add more error code mappings as needed
        };
        const errorMessage =
          customErrorMessages[error.code] || "An unexpected error occurred.";
        setError(errorMessage);
      } else {
        setError("An unexpected error occurred."); // Fallback error message
      }
      // throw error;
    }
  };
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ User Login
      </div>
      <div className=" sm:min-h-screen min-h-[500px] flex justify-center items-center bg-gray-50">
        <div className="bg-white p-6 md:p-10 sm:w-full max-w-md shadow rounded-lg">
          <div>
            <Title
              text="User Login"
              className=" sm:text-4xl text-3xl text-center mb-6 text-[#0073cf] font-bold"
            />
            <h4 className="text-center sm:text-2xl text-xl font-semibold">
              Enter Your Credentials
            </h4>
            <Link to={"/login/admin"}>
              <span className="flex justify-center mt-4 font-medium cursor-pointer text-[#0073cf]">
                login as admin, click here
              </span>
            </Link>
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit(submit)}>
              <LoginInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                input_outline_color="outline-[#0073cf]"
                classes="mb-4 mt-6"
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
                classes="mt-2 mb-6"
                placeholder="Enter your password"
                input_outline_color="outline-[#0073cf]"
                {...register("password", { required: true })}
              />
              <div className="flex justify-between">
                <Button
                  children="Login"
                  type="submit"
                  className="bg-[#0073cf] text-white px-4 py-2 rounded-md"
                />
                <Link to="/signup/user">
                  <Button
                    children="SignUp"
                    type="button"
                    className="bg-green-800 text-white px-4 py-2 rounded-md"
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

export default Login;
