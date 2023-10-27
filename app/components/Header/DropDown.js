"use client";

import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function DropDown({ link, handler, pname }) {
  const [show, setShow] = useState(false);

  return (
    <li
      className={`${
        pname === "/about"
          ? "text-hoverColor md:border-hoverColor"
          : "text-myBlue md:border-transparent md:hover:border-hoverColor"
      } md:h-[15vh] grid gap-4 md:place-content-center md:border-b-[5px] transition-all md:relative`}
    >
      <span className="flex items-center gap-2 md:hover:text-hoverColor transition-all">
        <Link href={`/${link}`} onClick={handler}>
          {link}
        </Link>
        {show ? (
          <IoIosArrowUp onClick={() => setShow(false)} />
        ) : (
          <IoIosArrowDown onClick={() => setShow(true)} />
        )}
      </span>
      {show && (
        <ul className="pl-6 grid gap-4 md:absolute md:top-[100%] md:bg-[#F7FAFD] md:px-5 md:py-4 md:capitalize md:rounded-b-sm">
          <li className="md:min-w-[8vw] md:hover:text-hoverColor transition-all">
            <Link href="/">Realty <span className="md:hidden">Department</span><span className="hidden md:inline">Dept.</span></Link>
          </li>
          <li className="md:min-w-[8vw] md:hover:text-hoverColor transition-all">
            <Link href="/">IT <span className="md:hidden">Department</span><span className="hidden md:inline">Dept.</span></Link>
          </li>
        </ul>
      )}
    </li>
  );
}
