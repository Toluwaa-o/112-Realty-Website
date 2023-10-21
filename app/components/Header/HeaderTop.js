import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function HeaderTop() {
  return (
    <div className="flex items-center justify-between p-3 md:justify-center md:gap-2">
      <span className="flex items-center gap-1">
        <BsTelephoneFill size={21} />
        <Link href="tel:+447832994230">+44 7832 994230</Link>
      </span>
      <span className="bg-myBlue w-[4px] h-[25px]"></span>
      <span className="flex items-center gap-1">
        <FaEnvelope size={21} />
        <Link href="mailto:aisaac@112realty.com">aisaac@112realty.com</Link>
      </span>
    </div>
  );
}
