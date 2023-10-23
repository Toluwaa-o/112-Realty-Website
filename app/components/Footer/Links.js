import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Links() {
  return (
    <nav className="flex gap-4 p-3 m-auto md:col-span-3">
      <Link
        className="md:hover:text-[#039eab] transition-all md:hover:scale-150"
        href="https://twitter.com/112realty"
      >
        <BsTwitter size={27} />
      </Link>
      <Link
        className="md:hover:text-[#039eab] transition-all md:hover:scale-150"
        href="https://youtube.com/@112realty"
      >
        <BsYoutube size={27} />
      </Link>
      <Link
        className="md:hover:text-[#039eab] transition-all md:hover:scale-150"
        href="https://instagram.com/112realty"
      >
        <BsInstagram size={27} />
      </Link>
      <Link
        className="md:hover:text-[#039eab] transition-all md:hover:scale-150"
        href="https://facebook.com/112realty"
      >
        <BsFacebook size={27} />
      </Link>
      <Link
        className="md:hover:text-[#039eab] transition-all md:hover:scale-150"
        href="https://linkedin.com/112realty"
      >
        <BsLinkedin size={27} />
      </Link>
    </nav>
  );
}
