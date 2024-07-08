import Link from "next/link";
import MobileMenu from "./MobileMenu";
import logo from "../../../public/logos/furlong-logo.png";
import Image from "next/image";

export default function TheHeader() {
  return (
    <header>
      <nav className="fixed flex w-full bg-primaryWhite px-5 pt-5 z-50">
        <div className="flex flex-row w-full justify-between items-start border-t border-l border-primaryLight rounded-tl-3xl pl-5 pt-5 lg:px-10 lg:pt-10">
          <Link href="/" className="w-[200px] lg:w-[250px] pb-5">
            <Image
              src={logo}
              alt="The Furlong Building"
              className="w-full h-auto"
              priority
            />
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
