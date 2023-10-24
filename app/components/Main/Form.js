"use client";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Roboto_Condensed, Roboto } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
  });

  const [errorMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const updateFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { fullName, email, mobileNumber } = formData;
    if (fullName && email && mobileNumber)
      setButtonHandler({ ...buttonHandler, disabled: false });
  }, [formData]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const submitData = (e) => {
    e.preventDefault();

    if (buttonHandler.disabled) return;

    const { fullName, email, mobileNumber } = formData;

    if (!fullName || fullName.split(" ").length < 2)
      return setErrMsg("Please provide your full name");
    if (!email) return setErrMsg("Please provide your email");
    if (!mobileNumber) return setErrMsg("Please provide your mobile number");

    if (fullName && email && mobileNumber) {
      setButtonHandler({ disabled: true, text: "Hold on..." });
      axios
        .post("/api/submit-form", {
          ...formData,
          mobileNumber: Number(formData.mobileNumber),
        })
        .then((res) => setSuccessMsg(res.data.msg))
        .then(() => {
          setFormData({
            fullName: "",
            email: "",
            mobileNumber: "",
          });
          setButtonHandler({
            text: "Subscribe",
            disabled: true,
          });
        })
        .catch((error) => {
          setButtonHandler({
            text: "Subscribe",
            disabled: false,
          });

          if (error.response.data.msg)
            return setErrMsg(error.response.data.msg);

          return setErrMsg("Something went wrong, please try again later!");
        });
    }
  };

  useEffect(() => {
    if (errorMsg) setTimeout(() => setErrMsg(""), "2500");
  }, [errorMsg]);

  useEffect(() => {
    if (successMsg) setTimeout(() => setSuccessMsg(""), "2500");
  }, [successMsg]);

  const [buttonHandler, setButtonHandler] = useState({
    text: "Subscribe",
    disabled: true,
  });

  return (
    <span
      data-aos="fade-left"
      className="bg-[#F7FAFD] text-myBlue p-6 gap-4 grid rounded-lg col-start-2"
    >
      <h3
        className={`${roboto_condensed.className} text-center text-3xl uppercase md:w-[70%] md:m-auto`}
      >
        Access off market opportunities now
      </h3>
      <p
        className={`${roboto.className} font-light tracking-wide text-center md:w-[80%] md:m-auto`}
      >
        Subscribe to our Newsletter to be part of our network and benefit from
        monthly updates on the property market and new deals.
      </p>
      <form className="grid gap-3 md:m-auto md:w-[70%]" onSubmit={submitData}>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          aria-label="Full Name"
          value={formData.fullName}
          onChange={updateFormData}
          className="p-3 font-serif placeholder:font-extralight border border-gray-300 outline-none rounded-md md:hover:border-hoverColor md:hover:placeholder:text-hoverColor transition-all"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={formData.email}
          onChange={updateFormData}
          className="p-3 font-serif placeholder:font-extralight border-gray-300 outline-none border rounded-md md:hover:border-hoverColor md:hover:placeholder:text-hoverColor transition-all"
        />
        <input
          name="mobileNumber"
          type="tel"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={updateFormData}
          className="p-3 font-serif placeholder:font-extralight border-gray-300 outline-none border rounded-md md:hover:border-hoverColor md:hover:placeholder:text-hoverColor transition-all"
        />
        {errorMsg && (
          <p className="text-red-400 text-center md:text-xs md:tracking-wide md:font-semibold md:uppercase">
            {errorMsg}
          </p>
        )}
        {successMsg && (
          <p className="text-green-400 text-center md:text-xs md:tracking-wide md:font-semibold md:uppercase">
            {successMsg}
          </p>
        )}
        <button
          disabled={buttonHandler.disabled}
          className={`flex ${
            buttonHandler.disabled ? "bg-[#808080]" : "bg-[#00494F]"
          } text-white rounded-md gap-2 border items-center justify-center p-4 md:hover:bg-hoverColor transition-all`}
          onClick={submitData}
        >
          <p
            className={`${roboto.className} text-[0.7rem] font-medium uppercase tracking-[3px]`}
          >
            {buttonHandler.text}
          </p>
          <AiOutlineArrowRight />
        </button>
      </form>
    </span>
  );
}
