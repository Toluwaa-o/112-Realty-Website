"use client";

import Link from "next/link";
import { Roboto_Condensed, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import DropDown from "./DropDown";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar({ handler }) {
  const pname = usePathname();

  return (
    <nav
      className={`${roboto_condensed.className} flex text-myBlue uppercase tracking-widest absolute md:relative md:top-0 bg-[#F7FAFD] left-0 right-0 top-[8vh] p-4 md:p-0 shadow-md md:shadow-none`}
    >
      <ul className="flex flex-col gap-6 text-[1.1rem] md:text-[1rem] md:flex-row md:gap-10">
        <li
          className={`md:hidden ${
            pname === "/" ? "text-hoverColor" : "text-myBlue"
          } md:h-[15vh] md:grid md:place-content-center md:border-b-4`}
        >
          <Link href="/" onClick={handler}>
            Homepage
          </Link>
        </li>
        <li
          className={`hidden md:block md:hover:text-hoverColor transition-all ${
            pname === "/"
              ? "text-hoverColor md:border-hoverColor"
              : "text-myBlue md:border-transparent md:hover:border-hoverColor"
          } md:h-[15vh] md:grid md:place-content-center md:border-b-[5px] transition-all`}
        >
          <Link href="/" onClick={handler}>
            Home
          </Link>
        </li>
        <DropDown link={'about'} pname={pname} handler={handler} />
        <li
          className={`md:hover:text-hoverColor transition-all ${
            pname === "/services"
              ? "text-hoverColor md:border-hoverColor"
              : "text-myBlue md:border-transparent md:hover:border-hoverColor"
          } md:h-[15vh] md:grid md:place-content-center md:border-b-[5px] transition-all`}
        >
          <Link href="/resources" onClick={handler}>
            Resources
          </Link>
        </li>
        <DropDown link={'services'} pname={pname} handler={handler} />
        <li
          className={`md:hover:text-hoverColor transition-all ${
            pname === "/contact-us"
              ? "text-hoverColor md:border-hoverColor"
              : "text-myBlue md:border-transparent md:hover:border-hoverColor"
          } md:h-[15vh] md:grid md:place-content-center md:border-b-[5px] transition-all`}
        >
          <Link href="/contact-us" onClick={handler}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
