import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../firebase/auth_service";
import { Input, Button } from "./index";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const submit = async (data) => {
    setError("");
    console.log(data);
    try {
      const account = await authService.signUp(data);
      if (account) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        // navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Email Address :"
        type="email"
        className=""
        placeholder="e.g.johndoe@gmail.com"
        {...register("email", {
          required: true,
          validate: {
            matchPatern: (value) =>
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
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;


