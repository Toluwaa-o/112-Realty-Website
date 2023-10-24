import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export default function LogoSection() {
  return (
    <span className="p-4 max-w-[85%] m-auto grid gap-4 items-start">
      <img
        src="/images/png/logo-no-background.png"
        alt="112 Realty Logo"
        className="mb-4"
      />
      <p
        className={`${roboto_condensed.className} uppercase text-sm tracking-wider`}
      >
        Building Dreams, One Home at a Time
      </p>
    </span>
  );
}
