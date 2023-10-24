import "./globals.css";
import { Roboto, Roboto_Condensed } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "112 Realty",
  description: "112 realty Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative overflow-x-hidden min-h-[100vh] w-[100vw]`}>
        <Header />
        <main className="mb-[7vh] grid gap-[4em] md:gap-4 overflow-x-hidden w-[100vw] bg-[#F7FAFD]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
