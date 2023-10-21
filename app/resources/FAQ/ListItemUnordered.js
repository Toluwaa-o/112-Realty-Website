"use client";
import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function ListItemUnordered({ question, answer }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li
      data-aos="fade-right"
      key={question}
      className="grid gap-3 border-b border-gray-300 pb-4"
    >
      <h4
        className={`${roboto_condensed.className} md:hover:text-[#039eab] transition-all`}
        onClick={() => setShowDetails(!showDetails)}
        role="button"
      >
        {question}
      </h4>
      {showDetails && <p>{answer}</p>}
    </li>
  );
}
