import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <>
      <header className="box-border w-full px-8 md:px-12 py-2 flex flex-row h-16 justify-between items-center bg-white/30 font-sans font-semibold backdrop-blur-[1px] absolute z-10">
        <Image
          alt="Aura"
          src={logo.src}
          height={logo.height}
          width={logo.width}
          className="w-16 h-auto"
        />

        <nav>
          <ul className="hidden md:flex items-center justify-center gap-x-4">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/*hamburger*/}
        <img
          src="/hamburger.svg"
          className="w-10 h-10 block md:hidden cursor-pointer"
          id="header-menu"
        ></img>
      </header>
    </>
  );
}
