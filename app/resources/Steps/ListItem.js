"use client";
import { Roboto_Condensed } from "next/font/google";
import { AiFillCaretRight, AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function ListItem({ heading, details }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <span key={heading} className="grid gap-3 border-b border-gray-300 pb-4" data-aos="fade-right">
      <span
        className="flex items-center gap-2 md:hover:text-hoverColor transition-all"
        role="button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? <AiFillCaretUp /> : <AiFillCaretRight />}
        <li className={`${roboto_condensed.className} list-inside`}>
          {heading}
        </li>
      </span>
      {showDetails && <p className="ml-4">{details}</p>}
    </span>
  );
}
