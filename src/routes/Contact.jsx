import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Link } from "react-router-dom";

function Contact() {
  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [countries, setCountries] = useState([]);

  const onChange = () => {
    setCaptchaCompleted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaCompleted) {
      // Form submission logic goes here
      console.log("Form submitted successfully");
      alert("Form submitted successfully");
    } else {
      alert("Please complete the captcha before submitting the form.");
    }
  };

  // Provinces/District Data Germany
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/pensnarik/german-cities/master/germany.json"
        );
        const data = await response.json();
        const districtNames = data.map((city) => city.district);
        setProvinces(districtNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(provinces);

  //Countries Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-alphabet-letters.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }

        const data = await response.json();
        const firstElement = data[0];

        // Extract country names from the properties of the first element
        const countryNames = Object.values(firstElement).flatMap((item) =>
          item.countries.map((country) => country.country)
        );

        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(countries);

  return (
    <>
      <div className="h-14 w-full text-white text-sm pl-[3%] md:pl-[7%] bg-[#0073cf] flex flex-row items-center">
        <Link to={"/"}>Home</Link> &nbsp;/ Contact
      </div>
      <div className="relative min-h-[100vh]">
        <img
          src="./img/contact/contact_hero.webp"
          alt="about banner"
          className=" h-72 w-full object-cover object-center  "
        />
        <div className="absolute bottom-32 md:bottom-44 top-32 left-4 md:left-16 right-4 md:right-16 h-56 bg-white opacity-100 shadow-lg grid grid-cols-1 md:grid-cols-2 place-items-center p-8">
          <div class=" md:mb-0 col-span-1">
            <p class="text-black font-semibold text-sm md:text-lg lg:text-xl">
              To contact us, use the phone:
            </p>
            <p class="text-[#0072CE] font-bold text-xl md:text-2xl lg:text-4xl mt-2 md:mt-4">
              +34-954-298-300
            </p>
          </div>
          <div className=" md:mb-0 col-span-1 ml-6">
            <p className="text-black font-semibold text-sm md:text-lg lg:text-xl ">
              or email:
            </p>
            <p className="text-[#0072CE] font-bold text-xl md:text-2xl lg:text-4xl mt-2 md:mt-4 ">
              shop.es@corteva.com
            </p>
          </div>
          <div className="absolute top-10 md:top-[4.5rem] left-[7%] md:left-[48%] bg-[#0000002E] h-14 md:h-24 w-1 rounded-xl bottom-1/2 "></div>
        </div>
        <div className="border-t-2 h-72 border-none bg-[#f8f8f8] flex items-center justify-center">
          <p className="text-lg md:text-xl md:ml-16  md:mr-16 pt-16 mx-4 ">
            Please contact us via the phone number or email mentioned if you
            have any questions related to the order. We strive to help you as
            quickly as possible.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 m-4 md:m-20">
          <div className="col-span-1 md:col-span-4">
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-8">
                <label
                  for="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border h-12"
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  for="surnames"
                  className="block text-lg font-medium text-gray-700"
                >
                  Surnames *
                </label>
                <input
                  type="text"
                  id="surnames"
                  name="surnames"
                  className="mt-1 p-2 w-full border h-12"
                  required
                />
              </div>
              <div className="mb-8">
                <label
                  for="company"
                  className="block text-lg font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 p-2 w-full border h-12"
                />
              </div>
              <div className="mb-8">
                <label
                  for="email"
                  class="block text-lg font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border h-12 "
                />
              </div>
              <div className="mb-8">
                <label
                  for="province"
                  className="block text-lg font-medium text-gray-700"
                >
                  Province *
                </label>
                <select
                  id="province"
                  name="province"
                  className="mt-1 p-2 w-full border h-12"
                >
                  <option value="">--Choose One--</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-8">
                <label
                  for="country"
                  className="block text-lg font-medium text-gray-700"
                >
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 p-2 w-full border h-12 "
                >
                  {" "}
                  <option value="">--Choose One--</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div class="mb-9">
                <label
                  for="message"
                  className="block text-lg font-medium text-black"
                >
                  Your message *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border h-12 "
                />
              </div>
              <p className="mb-9">
                If you would like to receive Marketing Communications sent by
                Corteva Agriscience™ or any of its affiliated companies, please
                check the box below:
              </p>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox w-10 h-10 md:h-6 md:w-6  text-blue-600"
                />
                <label className="ml-4">
                  I wish to recieve communications about products and/ or
                  promotions
                </label>
              </div>
              <p className="mb-9 mt-9">
                Your privacy is important to us. We would like to inform you
                that we collect your information for the purpose of identifying
                your business interests, providing you with products or
                services, and providing you with a positive customer experience
                during business interactions. Your personal information (name,
                email address, telephone number and other contact information)
                will be stored on the client system hosted primarily in the
                United States. This information may be shared for the same
                purpose by Corteva Agriscience ™ businesses , affiliated
                companies, associates or certain third parties in other
                countries. If you wish to review our Privacy Statement, you can
                request it from one of our sales representatives, or access it
                at{" "}
                <a
                  href="https://www.corteva.es/politica-de-privacidad.html"
                  className="text-[#0091ff] underline "
                >
                  https://www.corteva.es/politica-de-privacidad.html
                </a>
                . By entering your personal information, you agree to the terms
                and conditions of this Privacy Statement. Corteva Agriscience ™
                reserves the right to verify the
              </p>
              <ReCAPTCHA
                sitekey="6Le9IYUpAAAAAJBRsq694Uyp917iNrBmgpR5234V"
                onChange={onChange}
                className="mb-6"
              />
              <button
                type="submit"
                className="bg-[#0072CE] text-white font-semibold text-lg  px-2 py-2 w-[100%] hover:bg-[#0071cec9] rounded-sm mb-15"
              >
                SEND
              </button>
            </form>
          </div>
          <div className="col-span-1 md:col-span-2 md:ml-10 md:my-0 my-12 ">
            <div className="bg-green-400 h-1 w-full  mr-20 "></div>
            <p className="mt-5 font-bold text-xl mb-5">Data Privacy</p>
            <hr className="bg-black-500" />
            <p className="mt-5 mb-5 text-medium font-semibold">
              Your privacy is of utmost importance to Corteva. We want you to be
              fully aware of how we collect, use and disclose information.
            </p>
            <hr className="mb-5" />
            <Link
              href=""
              className="mt-5 font-medium text-medium text-[#0072CE]"
            >
              Read the full privacy policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;