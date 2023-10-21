import Navbar from "./Navbar";

export default function HeaderBottom() {
  return (
    <div className="hidden md:flex items-center col-span-2 md:justify-around">
      <img
        src="/images/png/logo-no-background.png"
        alt="112 Realty Logo"
        className="w-[160px]"
      />
      <Navbar />
    </div>
  );
}
