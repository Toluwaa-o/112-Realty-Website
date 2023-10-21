'use client'

import { Roboto_Condensed } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function WhoAreWe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-myBlue grid p-2 gap-4 min-h-screen place-content-center md:gap-2 md:p-8 md:mb-[10vh]">
      <h3
      data-aos="fade-bottom"
        className={`${roboto_condensed.className} text-center text-[2.3rem] uppercase pt-4 pb-6 tracking-wider md:text-left md:text-[3.5rem]`}
      >
        Who are we?
      </h3>

      <span className="grid gap-4 md:grid-cols-2 md:p-8">
        <img
          src="/images/realestate1.jpg"
          alt="architectural building design"
          className="md:m-auto md:w-[90%]"
          data-aos="fade-right"
        />

        <p data-aos="fade-left" className="mt-[8vh]">
          Being a dedicated property investment firm, our clients are central to
          every service and transaction we offer. Our team is adept in
          conducting thorough research, displaying expertise, and maintaining
          impartiality.
          <br />
          <br />
          No matter your experience level in the property market, we provide
          tailored deals to enhance your portfolio, catering to your specific
          goals and ambitions.
        </p>
      </span>
    </div>
  );
}
