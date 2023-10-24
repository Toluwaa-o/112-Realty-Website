import HeaderBottom from "./HeaderBottom";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex text-myBlue fill-myBlue md:min-h-[15vh] h-fit md:grid md:grid-cols-2 md:h-fit md:mb-0 md:p-2 gap-8 sticky top-0 z-30 bg-[#F7FAFD] shadow-md md:pb-3 justify-between p-3 items-center">
      <img src='/images/logo-no-background.png' alt='logo' className="md:hidden w-[50px]" />
      <Menu />
      <HeaderBottom />
    </header>
  );
}
