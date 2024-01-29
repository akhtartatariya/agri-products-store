import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../firebase/auth_service";
import { Input, Button } from "./index";
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const account = await authService.login(data);
      if (account) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        // navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(login)}>
      {error && <p>{error}</p>}
      <Input
        label="Email Address :"
        type="email"
        className=""
        placeholder="e.g.johndoe@gmail.com"
        {...register("email", {
          required: true,
          validate: {
            pattern: (value) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
          },
        })}
      />
      <Input
        label="Password :"
        type="password"
        className=""
        placeholder="Enter Password"
        {...register("password", { required: true })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Login;
