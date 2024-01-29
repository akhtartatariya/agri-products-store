import React, { useEffect, useRef, useState } from "react";

import Title from "../Title";
import Button from "../FormStuff/Button";
import FormGroup from "../FormGroup";
import authService from "../../firebase/auth_service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";

function RegistrationForm({
  handleCancel,
  showLogin,
  registered,
  handleRegistrationForm,
}) {
  //State
  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  //HOOK OBJECTS
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Handlers
  const handlerInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const events = {
      fullName: registration.fullName,
      email: registration.email,
      password: registration.password,
      passwordConf: registration.passwordConf,
      id: Math.floor(Math.random() * 1000),
    };
    const validateRegistrationForm = (obj) => {
      console.log(obj);
      if (
        Object.values(obj).every(
          (value) => value || (typeof value === "number" && value === 0)
        )
      ) {
        return true; // Form is valid
      } else {
        window.alert("Complete all fields");
        return false; // Form is not valid
      }
    };
    if (validateRegistrationForm(events)) {
      try {
        const account = await authService.signUp(
          registration.fullName,
          registration.email,
          registration.password
        );
  
        if (account) {
          const userData = await authService.getCurrentUser();
          if (userData) dispatch(login(userData));
          navigate("/");
        }
      } catch (error) {
        console.log(":: error while registering form ", error);
      }
    }
  };

  //References
  let fullName = useRef();

  //Effects
  useEffect(() => {
    fullName.current.focus();
  }, []);

  function resetForm() {
    setRegistration({
      fullName: "",
      email: "",
      password: "",
      passwordConf: "",
    });
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-15 backdrop-blur-sm z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-80 md:min-w-96 shadow rounded-lg">
        <div className="">
          <Title
            text="Register"
            classes={"text-center mb-10 text-green-800 font-bold"}
          />
          <form onSubmit={handleRegistration}>
            <FormGroup
              label={"Name"}
              placeholder={"Enter your name"}
              classes={"mb-4 mt-8"}
              reference={fullName}
              value={registration.fullName}
              onChange={handlerInputChange}
              input_outline_color={"outline-green-800"}
              name={"fullName"}
            />
            <FormGroup
              label={"Email"}
              type={"email"}
              placeholder={"Enter your email"}
              classes={"my-4"}
              value={registration.email}
              onChange={handlerInputChange}
              input_outline_color={"outline-green-800"}
              name={"email"}
            />
            <FormGroup
              label={"Password"}
              type={"password"}
              placeholder={"Enter your password"}
              classes={"my-4"}
              value={registration.password}
              onChange={handlerInputChange}
              input_outline_color={"outline-green-800"}
              name={"password"}
            />
            <FormGroup
              label={"Confirm Password"}
              type={"password"}
              placeholder={"Enter your password again"}
              classes={"mt-4 mb-10"}
              value={registration.passwordConf}
              onChange={handlerInputChange}
              input_outline_color={"outline-green-800"}
              name={"passwordConf"}
            />
            <div className="flex justify-between">
              <Button
                children="Register"
                type={"submit"}
                className={"bg-green-800 text-white px-4 py-2 rounded-md"}
                onClick={() => console.log("Registered")}
              />
              <Button
                children="Login"
                type={"button"}
                className={"bg-[#0073cf] text-white px-4 py-2 rounded-md"}
                onClick={showLogin}
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

export default RegistrationForm;
