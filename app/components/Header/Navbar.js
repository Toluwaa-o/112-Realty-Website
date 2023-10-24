"use client";

import Link from "next/link";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar({ handler }) {
  const pname = usePathname();

  return (
    <nav
      className={`${roboto_condensed.className} flex text-myBlue uppercase tracking-widest absolute md:relative md:top-0 bg-[#F7FAFD] left-0 right-0 top-[8vh] p-4 md:p-[unset] shadow-md md:shadow-none`}
    >
      <ul className="flex flex-col gap-6 text-[1.1rem] md:text-[1rem] md:flex-row md:gap-10">
        <li
          className={`md:hidden ${
            pname === "/" ? "text-hoverColor" : "text-myBlue"
          }`}
        >
          <Link href="/" onClick={handler}>
            Homepage
          </Link>
        </li>
        <li
          className={`hidden md:block md:hover:text-hoverColor transition-all ${
            pname === "/" ? "text-hoverColor" : "text-myBlue"
          }`}
        >
          <Link href="/" onClick={handler}>
            Home
          </Link>
        </li>
        <li
          className={`md:hover:text-hoverColor transition-all ${
            pname === "/about" ? "text-hoverColor" : "text-myBlue"
          }`}
        >
          <Link href="/about" onClick={handler}>
            About
          </Link>
        </li>
        <li
          className={`md:hover:text-hoverColor transition-all ${
            pname === "/resources" ? "text-hoverColor" : "text-myBlue"
          }`}
        >
          <Link href="/resources" onClick={handler}>
            Resources
          </Link>
        </li>
        <li
          className={`md:hover:text-hoverColor transition-all ${
            pname === "/services" ? "text-hoverColor" : "text-myBlue"
          }`}
        >
          <Link href="/services" onClick={handler}>
            Services
          </Link>
        </li>
        <li
          className={`md:hover:text-hoverColor transition-all ${
            pname === "/contact-us" ? "text-hoverColor" : "text-myBlue"
          }`}
        >
          <Link href="/contact-us" onClick={handler}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
