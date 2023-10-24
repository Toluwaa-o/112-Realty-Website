import { Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function Banner(props) {
  return (
    <div className="relative slideShowBg min-h-[50vh] grid place-content-center text-5xl tracking-widest text-white uppercase font-bold md:text-6xl md:min-h-[70vh] md:justify-start md:pl-[2em] md:mb-[1em]">
      <span className="h-[100%] absolute bg-[#214469] w-[100%] opacity-50"></span>
      <h2 className={`${roboto_condensed.className} custom_fadeIn z-10`}>{props.children}</h2>
    </div>
  );
}
