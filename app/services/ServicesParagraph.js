import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function ServicesParagraph() {
  return (
    <div className="p-4 text-myBlue md:w-[60%] md:m-auto md:text-center">
      <span className={`${roboto_condensed.className} text-3xl`}>
        We specialize in....
      </span>
      <br />
      <br />
      delivering high-yield property investments in the UK market, sourced from
      private vendors and renowned agents at below market value.
      <br className="md:hidden" />
      <br className="md:hidden" />
      Our goal is to help you build wealth through passive income and equity
      growth, offering support beyond property acquisition. Our dedicated team
      ensures smooth transactions, from property management to eventual sales,
      prioritizing your needs at every step.
    </div>
  );
}
