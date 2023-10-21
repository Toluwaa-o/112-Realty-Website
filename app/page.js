import { Roboto_Condensed, Roboto } from "next/font/google";
import { listData, listDataII } from "@/utils/data";
import { AiOutlineArrowRight } from "react-icons/ai";
import Main from "./components/Main/Main";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return <Main />;
}
