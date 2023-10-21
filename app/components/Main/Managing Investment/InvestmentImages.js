'use client'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function InvestmentImages() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hidden md:grid py-3 md:col-end-2 md:row-start-1 relative md:w-[80%] md:py-0">
      <img
        data-aos="fade-right"
        src="/images/contemporary-design-living-houses-modern-luxury-ap-PULDYE5.jpg"
        alt="Facadeofa modern apartment or office block"
        className="h-[40vh] md:h-auto"
      />
      <img
        data-aos="fade-right"
        src="/images/new-building-exterior-facade-with-terrace-construc-PM8L7QV-683x1024.jpg"
        alt="New building exterior facade with terrace construction"
        className="md:relative md:-top-[33%] md:ml-auto md:w-[80%] hover:md:-top-[28%] transition-all"
      />
    </div>
  );
}
