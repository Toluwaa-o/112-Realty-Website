"use client";

import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function ContactUsParagraph() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-myBlue p-4 grid gap-4 md:mb-[20vh]">
      <h3
        data-aos="fade-right"
        className={`${roboto_condensed.className} uppercase text-4xl`}
      >
        Get in touch
      </h3>
      <p data-aos="fade-right" className="mb-8">
        We are eager to receive your message. Simply share some details about
        yourself, and we will determine the most suitable solution for you and
        your project.
      </p>

      <h4
        data-aos="fade-right"
        className={`${roboto_condensed.className} uppercase text-2xl`}
      >
        Request for more info
      </h4>
      <p data-aos="fade-right">
        For general enquiries, please get in touch with us through{" "}
        <Link href="tel:+447832994230">+44 7832 994230</Link> or{" "}
        <Link href="mailto:aisaac@112realty.com">aisaac@112realty.com</Link>
      </p>
    </div>
  );
}
