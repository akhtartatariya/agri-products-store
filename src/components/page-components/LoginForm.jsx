import React, { useEffect, useRef, useState } from "react";
import Title from "../Title";
import Button from "../FormStuff/Button";
import FormGroup from "../FormGroup";

function LoginForm({ handleCancel, loggedIn, showRegister }) {
  //STATES
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //REFERENCES
  let emailRef = useRef();
  let passwordRef = useRef();

  //HANDLERS
  const changeEmail = (e) => {
    setEmail(e.target.value);
    // setEmail(emailRef.current.value); "another way, but do not use it"
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      email: email,
      password: password,
      id: Math.floor(Math.random() * 1000),
    };
    // console.log(event);
    validateLoginForm();
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
            classes={"text-center mb-10 text-[#0073cf] font-bold"}
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
                onClick={() => window.alert("Form Submission")}
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
