'use client'

import InvestmentImages from "./InvestmentImages";
import List from "./List";
import { Roboto_Condensed } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export default function ManagingInvestment() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-left" className="bg-[#F9F7F5] py-8 md:grid grid-cols-2 md:place-content-center md:pt-[7em]">
      <div
        className={`${roboto_condensed.className} text-myBlue grid p-6 gap-6 min-h-[100vh] place-content-center md:min-h-fit md:self-start md:pt-[6em]`}
      >
        <h2 className="uppercase text-[2.6rem] m-auto w-[90%] font-light text-center leading-[3.1rem] md:text-left md:m-0 md:text-[3.5rem] md:leading-[3.7rem]">
          Managing your investment as if they were our own
        </h2>

        <p className="uppercase text-2xl font-light w-[75%] tracking-wide md:w-[85%]">
          We will guide you through the right decision when investing:
        </p>
        <List />
      </div>

      <InvestmentImages />
    </div>
  );
}
