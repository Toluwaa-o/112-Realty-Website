"use client";

import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShieldCheckeredFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function List() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ul className="uppercase text-sm font-bold tracking-wider flex flex-col gap-6 md:row-start-2 md:col-start-2 md:justify-center md:gap-[10vh]">
      <li
        className="flex md:flex-row flex-col items-center gap-2"
        data-aos="fade-left"
      >
        <span className="p-4 bg-[#dff3f5] text-myBlue rounded-full md:p-6">
          <AiFillHome size={27} />
        </span>
        <span className="grid gap-2">
          <h4 className="text-myBlue">Quality properties</h4>
          <p className="md:block hidden capitalize text-gray-400 font-light">
            Unveiling superior properties that epitomize luxury living, ensuring
            a refined lifestyle at every turn.
          </p>
        </span>
      </li>

      <li
        className="flex md:flex-row flex-col items-center gap-2"
        data-aos="fade-left"
      >
        <span className="p-4 bg-[#dff3f5] text-myBlue rounded-full md:p-6">
          <BsFillPersonFill size={27} />
        </span>
        <span className="grid gap-2">
          <h4 className="text-myBlue">Top rated agents</h4>
          <p className="md:block hidden capitalize text-gray-400 font-light">
            Partnering with elite agents renowned for their unparalleled
            expertise and commitment, guaranteeing an exceptional real estate
            experience.
          </p>
        </span>
      </li>

      <li
        className="flex md:flex-row flex-col items-center gap-2"
        data-aos="fade-left"
      >
        <span className="p-4 bg-[#dff3f5] text-myBlue rounded-full md:p-6">
          <PiShieldCheckeredFill size={27} />
        </span>
        <span className="grid gap-2">
          <h4 className="text-myBlue">Easy and safe</h4>
          <p className="md:block hidden capitalize text-gray-400 font-light">
            Ensuring a hassle-free and secure transaction process, prioritizing
            your peace of mind and convenience every step of the way.
          </p>
        </span>
      </li>
    </ul>
  );
}
