import Copyright from "./Copyright";
import Links from "./Links";
import Location from "./Location";
import LogoSection from "./LogoSection";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="text-center p-4 flex flex-col text-myBlue gap-[7vh] md:grid md:gap-[2em] md:grid-cols-3 md:grid-rows-myRows md:p-[4em]">
      <LogoSection />
      <Location />
      <QuickLinks />
      <Links />
      <Copyright />
    </footer>
  );
}
