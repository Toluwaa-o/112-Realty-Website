"use client";
import { Roboto_Condensed } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function ListedData({ pic, heading, details }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <li data-aos="fade-up" className="grid gap-4 text-myBlue">
      <img src={pic} alt={heading} className="m-auto w-[70%]" />
      <h3
        className={`${roboto_condensed.className} uppercase font tracking-wide`}
      >
        {heading}
      </h3>
      <p className="w-[95%] m-auto">{details}</p>
    </li>
  );
}
