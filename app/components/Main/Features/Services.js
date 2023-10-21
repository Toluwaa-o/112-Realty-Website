import { Roboto_Condensed, Roboto } from "next/font/google";
import ListedData from "../../ListedData";
import { listDataII } from "@/utils/data";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Services() {
  return (
    <div
      className={`${roboto.className} text-myBlue grid p-2 gap-4 min-h-screen place-content-center text-center md:mb-[15vh]`}
    >
      <h3
        className={`${roboto_condensed.className} text-center text-[2.3rem] uppercase w-[90%] m-auto tracking-wider mb-[1em] md:text-[3.5rem]`}
      >
        Our Services include:
      </h3>
      <ul className="flex flex-col justify-center items-center gap-[8vh] md:grid md:grid-cols-4 md:gap-2 md:p-4">
        {listDataII.map((data) => (
          <ListedData key={data.heading} {...data} />
        ))}
      </ul>
    </div>
  );
}
