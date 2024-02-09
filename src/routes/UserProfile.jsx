import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const userName = useSelector((state) => state.auth.userData?.displayName);
  const userEmail = useSelector((state) => state.auth.userData?.email);
  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ User Profile
      </div>
      <div className="min-h-[100vh] bg-[#f5f5f5] p-10  ">
        <div>
          <div className="flex flex-col justify-center bg-white p-5 rounded shadow-md shadow-slate-300 mb-5 w-full max-w-5xl mx-auto">
            <h1 className="text-center text-4xl font-bold m-2">
              Welcome to your Corteva Profile!
            </h1>

            <p className="text-center text-lg m-2 font-normal max-w-md mx-auto">
              Please take the time to update your information below. This will
              allow you to earn more Corteva points and increase your Corteva
              level
            </p>
          </div>
          <div>
            <div className="w-full">
              <h2 className="text-center text-xl bg-white p-5 font-extrabold rounded-2xl">
                Account Information
              </h2>
            </div>
            <div className="bg-white rounded shadow-md shadow-slate-300 mt-5 w-full max-w-5xl mx-auto p-10">
              <hr />
              <h1 className=" text-left text-3xl font-bold m-2 text-[#0073cf] mb-5  py-5">
                Active account
              </h1>
              <hr />
              <div className="flex p-5">
                <div className="flex flex-col">
                  <p className="text-left text-xl font-bold m-2 p-2 mr-16 inline-block">
                    Name
                  </p>

                  <p className="text-left text-xl font-bold m-2 p-2 inline-block mr-16">
                    Email
                  </p>
                </div>

                <div className="flex flex-col justify-around">
                  <span className="font-normal text-xl">{userName}</span>

                  <span className="font-normal text-right text-xl">
                    {userEmail}
                  </span>
                </div>
              </div>
              <hr />
            </div>
            <div className="bg-white rounded shadow-md shadow-slate-300 mt-5 w-full max-w-5xl mx-auto p-10">
              <hr />
              <h1 className=" text-left text-3xl font-bold m-2 text-[#0073cf] mb-5  py-5">
                Related accounts
              </h1>
              <hr />
              <div className="flex p-5">
                <div className="flex flex-col">
                  <p className="text-left text-xl font-bold m-2 p-2 mr-16 inline-block">
                    Corteva
                  </p>
                  <p className="text-left text-xl font-bold m-2 p-2 inline-block mr-16">
                    Granular™ Link
                  </p>
                </div>

                <div className="flex flex-col justify-around">
                  <span className="font-normal text-base">
                    Click <Link to={'https://www.corteva.es/'} className="text-[#0073cf] font-bold" target="blank">here</Link>{" "}
                    to visit your Corteva account
                  </span>

                  <span className="font-normal text-base">
                    Click <Link to={'https://www.corteva.es/agronomia-y-servicios/granular-link.html'} className="text-[#0073cf] font-bold" target="blank">here</Link>{" "}
                    to visit your Granular™ Link account
                  </span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
