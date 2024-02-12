import React from "react";
// import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const userName = useSelector((state) => state.auth.userData?.displayName);
  const userEmail = useSelector((state) => state.auth.userData?.email);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-3 md:pl-7 bg-[#0073cf] flex items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ User Profile
      </div>
      <div className="min-h-[100vh] bg-[#f5f5f5] p-5 md:p-10">
        <div className="flex flex-col justify-center bg-white p-5 rounded shadow-md shadow-slate-300 mb-5 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold m-2 text-center">
            Welcome to your Corteva Profile!
          </h1>
          <p className="text-lg m-2 font-normal max-w-md mx-auto text-center">
            Please take the time to update your information below. This will
            allow you to earn more Corteva points and increase your Corteva
            level.
          </p>
        </div>
        <div className="bg-white rounded shadow-md shadow-slate-300 mt-5 max-w-5xl mx-auto p-5 md:p-10">
          <hr className="my-5" />
          <h2 className="text-xl bg-white p-3 md:p-5 font-extrabold rounded-2xl text-center">
            Account Information
          </h2>
          <div className="bg-white rounded shadow-md shadow-slate-300 mt-5 max-w-5xl mx-auto p-5 md:p-10">
            <hr className="my-5" />
            <h1 className="text-3xl font-bold m-2 text-[#0073cf] mb-5 py-3 text-center">
              Active account
            </h1>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 p-5">
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold m-2 p-2">Name</p>
                <p className="text-xl font-bold m-2 p-2">Email</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl m-2 p-2">{userName}</p>
                <p className="text-xl m-2 p-2">{userEmail}</p>
              </div>
            </div>
            <hr className="my-5" />
          </div>
          <div className="bg-white rounded shadow-md shadow-slate-300 mt-5 max-w-5xl mx-auto p-5 md:p-10">
            <hr className="my-5" />
            <h1 className="text-3xl font-bold m-2 text-[#0073cf] mb-5 py-3 text-center">
              Related accounts
            </h1>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 p-5">
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold m-2 p-2">Corteva</p>
                <p className="text-xl font-bold m-2 p-2">Granular™ Link</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-normal text-base m-2 p-2">
                  Click{" "}
                  <Link
                    to={"https://www.corteva.es/"}
                    className="text-[#0073cf] font-bold"
                    target="blank"
                  >
                    here
                  </Link>{" "}
                  to visit your Corteva account
                </p>
                <p className="font-normal text-base m-2 p-2">
                  Click{" "}
                  <Link
                    to={
                      "https://www.corteva.es/agronomia-y-servicios/granular-link.html"
                    }
                    className="text-[#0073cf] font-bold"
                    target="blank"
                  >
                    here
                  </Link>{" "}
                  to visit your Granular™ Link account
                </p>
              </div>
              <div className="flex flex-col"></div>
            </div>
            <hr className="my-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;


