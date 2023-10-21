'use client'

import { Roboto_Condensed } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function ComfortableProperty() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div data-aos="fade-right" className="min-h-[70vh] p-6 grid place-content-center text-myBlue text-center gap-8">
      <h2
        className={`${roboto_condensed.className} uppercase tracking-wider m-auto max-w-[70%] md:max-w-[unset]`}
      >
        Investing in Ease and Affluence.
      </h2>
      <p className="text-[1.36rem] md:m-auto md:max-w-[50%]">
        112 Realty is emerging as a trailblazing force in the realm of property
        investment, demonstrating exceptional growth and offering specialized,
        reliable investment services that prioritize safety and security within
        the dynamic UK market.
      </p>
    </div>
  );
}
