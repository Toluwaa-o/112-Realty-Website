'use client'

import List from "./List";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Paragraph() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-4 grid gap-[4em] md:grid-rows-myRows md:grid-cols-myCol md:mb-[3em] md:p-[2em] ">
      <p data-aos="fade-right" className="md:w-[50vw] md:text-lg text-myBlue">
        Our focus is delivering high-performance UK property investment
        opportunities sourced meticulously from private vendors and agents,
        securing lucrative deals below market value.
      </p>

      <img
      data-aos="fade-right"
        src="/images/modern-grey-apartment-buildings-seen-in-berlin-PQZQ57H-3.jpg"
        alt="Modern grey apartment building seen in berlin"
        className="md:w-[50vw] md:row-start-2 rounded-lg"
      />
      <List />
    </div>
  );
}
