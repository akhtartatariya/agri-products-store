import React, { useEffect, useRef, useState } from "react";
import Title from "../Title";
import Button from "../FormStuff/Button";
import FormGroup from "../FormGroup";
import authService from "../../firebase/auth_service";
import { login as authLogin } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginForm({ handleCancel, loggedIn, showRegister }) {
  //STATES
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //REFERENCES
  let emailRef = useRef();
  let passwordRef = useRef();
  //HOOK OBJECTS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //HANDLERS
  const changeEmail = (e) => {
    setEmail(e.target.value);
    // setEmail(emailRef.current.value); "another way, but do not use it"
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  //AUTHENTICATION FUNTIONALITY AND STORE UPDATEs
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const account = await authService.login(email, password);
      console.log(account.user.displayName);
      if (account) {
        const user = await authService.getCurrentUser();
        console.log(user);
        const userData = {
          uid: account.user.uid,
          email: account.user.email,
          displayName: account.user.displayName,
        };
        if (userData) dispatch(authLogin({ userData }));
        navigate("/");
      }
      validateLoginForm();
    } catch (error) {
      console.error("Error while submitting login form", error);
    }
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  function validateLoginForm() {
    email === "" && window.alert("Please enter your email");
    password === "" || password.length <= 4
      ? window.alert("Please enter your password")
      : loggedIn();
  }

  //EFFECTS
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-15 backdrop-blur-sm z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-80 md:min-w-96 shadow rounded-lg">
        <div className="">
          <Title
            text="Login"
            className={"text-4xl text-center mb-10 text-[#0073cf] font-bold"}
          />
          <h4 className="text-center text-2xl font-semibold">
            Enter Your Credentials
          </h4>
          <form onSubmit={handleSubmit}>
            <FormGroup
              label={"Email"}
              type={"email"}
              placeholder={"Enter your email"}
              classes={"mb-4 mt-8"}
              value={email}
              onChange={changeEmail}
              reference={emailRef}
              input_outline_color={"outline-[#0073cf]"}
            />
            <FormGroup
              label={"Password"}
              type={"password"}
              placeholder={"Enter your password"}
              classes={"mt-4 mb-10"}
              value={password}
              onChange={changePassword}
              reference={passwordRef}
              input_outline_color={"outline-[#0073cf]"}
            />
            <div className="flex justify-between">
              <Button
                children="Login"
                type={"submit"}
                className={"bg-[#0073cf] text-white px-4 py-2 rounded-md"}
              />
              <Button
                children="Register"
                type={"button"}
                className={"bg-green-800 text-white px-4 py-2 rounded-md"}
                onClick={showRegister}
              />
            </div>
            <Button
              className={
                "bg-black text-white px-3 py-1 rounded-md absolute top-5 right-5"
              }
              children="X"
              onClick={handleCancel}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
