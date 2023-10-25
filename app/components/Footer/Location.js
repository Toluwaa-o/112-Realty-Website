import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function Location() {
  return (
    <span className="flex justify-between flex-col gap-8 md:flex-row items-center md:items-start">
      <span className="flex flex-col gap-5">
      <h3 className={`${roboto_condensed.className} uppercase text-2xl`}>
        Manchester
      </h3>
      <address className="not-italic md:hover:text-hoverColor transition-all">
        <Link href="https://www.google.com/maps/place/146+Stevenson+Dr,+Moorside,+Oldham/@53.5668509,-2.0724573,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb80d37d5ce75:0xa75b113af076c928!8m2!3d53.5668509!4d-2.0724573?entry=ttu">
          146 Stevenson drive,
          <br />
          OL1 4RS Manchester
        </Link>
      </address>
      <span className="flex items-center gap-1 m-auto md:hover:text-hoverColor transition-all">
        <BsTelephoneFill size={21} />
        <Link href="tel:+447832994230">+44 7832 994230</Link>
      </span>
      <span className="flex items-center gap-1 m-auto md:hover:text-hoverColor transition-all">
        <FaEnvelope size={21} />
        <Link href="mailto:aisaac@112realty.com">aisaac@112realty.com</Link>
      </span>
    </span>

    <span className="flex flex-col gap-5">
      <h3 className={`${roboto_condensed.className} uppercase text-2xl`}>
        LAGOS
      </h3>
      <address className="not-italic md:hover:text-hoverColor transition-all">
        <Link href="https://www.google.com/maps/place/146+Stevenson+Dr,+Moorside,+Oldham/@53.5668509,-2.0724573,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb80d37d5ce75:0xa75b113af076c928!8m2!3d53.5668509!4d-2.0724573?entry=ttu">
          14 Berkley Street,
          <br />
          Lagos Island
        </Link>
      </address>
      <span className="flex items-center gap-1 m-auto md:hover:text-hoverColor transition-all">
        <BsTelephoneFill size={21} />
        <Link href="tel:+2349090847791">+234 909 084 7791</Link>
      </span>
      <span className="flex items-center gap-1 m-auto md:hover:text-hoverColor transition-all">
        <FaEnvelope size={21} />
        <Link href="mailto:asheogunleye02@gmail.com">asheogunleye02@gmail.com</Link>
      </span>
    </span>
    </span>
  );
}
