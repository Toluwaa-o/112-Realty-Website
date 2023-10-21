"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Grid() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="grid p-4 gap-[3em] text-3xl uppercase text-center text-myBlue md:text-left md:grid-cols-2 md:grid-rows-2 md:gap-2 md:text-5xl md:h-fit md:mb-[3em]">
      <img
        src="/images/look_after.jpg"
        alt="handshake"
        className="h-[300px] md:w-[100%] md:h-[80vh] rounded-md"
        data-aos="fade-right"
      />
      <p
        data-aos="fade-left"
        className="md:grid md:place-content-center md:w-[70%] md:m-auto"
      >
        Throughout the entire process: We've got you covered.
      </p>
      <img
        data-aos="fade-left"
        src="/images/str_investment.jpg"
        alt="handshake"
        className="h-[300px] md:w-[100%] md:h-[80vh] rounded-md md:col-start-2"
      />
      <p
        data-aos="fade-right"
        className="md:grid md:place-content-center md:w-[70%] md:m-auto md:row-start-2"
      >
        Crafting investments that fortify your prosperity.
      </p>
    </div>
  );
}
