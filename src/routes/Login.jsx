import React, { useState } from "react";
import Title from "../components/Title";
import authService from "../firebase/auth_service";
import { useDispatch } from "react-redux";
import LoginInput from "../components/FormStuff/LoginInput";
import Button from "../components/FormStuff/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../store/authSlice";
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
        if (userData) dispatch(authLogin({ userData }));
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      }
    } catch (error) {
        console.error("Error while submitting login form", error);
        setError(error.message ||"unexpected error");
        throw error
    }
  };
  return (
    <div className="h-[100vh] w-full">
      <div className=" flex justify-center items-center w-full h-full bg-black bg-opacity-15 ">
        <div className=" bg-white p-10 w-80 md:min-w-96 shadow rounded-lg">
          <div className="">
            <Title
              text="Login"
              className={"text-4xl text-center mb-10 text-[#0073cf] font-bold"}
            />
            <h4 className="text-center text-2xl font-semibold">
              Enter Your Credentials
            </h4>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(submit)}>
              <LoginInput
                label={"Email"}
                type={"email"}
                placeholder={"Enter your email"}
                input_outline_color={"outline-[#0073cf]"}
                classes={"mb-4 mt-8"}
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
                label={"Password"}
                type={"password"}
                classes={"mt-4 mb-10"}
                placeholder={"Enter your password"}
                input_outline_color={"outline-[#0073cf]"}
                {...register("password", { required: true })}
              />
              <div className="flex justify-between">
                <Button
                  children="Login"
                  type={"submit"}
                  className={"bg-[#0073cf] text-white px-4 py-2 rounded-md"}
                />
                <Link to={"/signup"}>
                  <Button
                    children="Register"
                    type={"button"}
                    className={"bg-green-800 text-white px-4 py-2 rounded-md"}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
