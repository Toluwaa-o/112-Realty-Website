"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Menu() {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <span className="bg-white p-3 z-10 grid gap-4 md:hidden">
      {displayMenu ? (
        <AiOutlineClose
          className="ml-auto fill-myBlue"
          size={23}
          onClick={() => setDisplayMenu(false)}
        />
      ) : (
        <GiHamburgerMenu
          className="ml-auto fill-myBlue"
          size={23}
          onClick={() => setDisplayMenu(true)}
        />
      )}
      {displayMenu && <Navbar handler={() => setDisplayMenu(false)} />}
    </span>
  );
}
