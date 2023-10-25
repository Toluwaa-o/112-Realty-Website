import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export default function SlideShowSection() {
  return (
    <div
      className={`${roboto_condensed.className} w-[100vw] h-[100vh] text-white m-auto slideShowBg grid place-content-center p-6 text-center gap-4 rounded-bl-[-50%] relative`}
    >
      <span className="h-[100%] absolute bg-[#214469] w-[100%] opacity-50"></span>
      <h1 className="text-[4.2rem] custom_fadeIn z-20 uppercase leading-[1em] md:text-[10rem] md:font-extrabold md:tracking-widest">112 Realty</h1>
      <span className="flex custom_fadeIn flex-col gap-2 z-20">
        <h3 className="uppercase text-2xl items-center md:text-3xl md:font-semibold w-[65%] md:w-[40%] m-auto">
          Building Dreams, One Home at a Time
        </h3>
        <span className="w-[25vw] h-[3px] m-auto bg-[#F7FAFD]"></span>
      </span>
      <p className="text-[1.1rem] custom_fadeIn font-light md:w-[50%] md:m-auto z-20 md:font-semibold">
        A UK property firm fostering prosperity with tailored strategies for
        your goals.
      </p>
      <nav className="flex custom_fadeIn gap-4 p-3 m-auto z-20 mt-[3em]">
        <Link
          className="md:hover:scale-150 transition-all"
          href="https://twitter.com/112realty"
        >
          <BsTwitter size={27} />
        </Link>
        <Link
          className="md:hover:scale-150 transition-all"
          href="https://youtube.com/@112realty"
        >
          <BsYoutube size={27} />
        </Link>
        <Link
          className="md:hover:scale-150 transition-all"
          href="https://instagram.com/112realty"
        >
          <BsInstagram size={27} />
        </Link>
        <Link
          className="md:hover:scale-150 transition-all"
          href="https://facebook.com/112realty"
        >
          <BsFacebook size={27} />
        </Link>
        <Link
          className="md:hover:scale-150 transition-all"
          href="https://linkedin.com/112realty"
        >
          <BsLinkedin size={27} />
        </Link>
      </nav>
    </div>
  );
}
