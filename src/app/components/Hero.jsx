import Image from "next/image";
import hero from "../../../public/images/hero.png";
import mobileHero from "../../../public/images/mobile-hero.png";
import { LuArrowDown } from "react-icons/lu";
import Link from "next/link";
import Curve from "./Curve";

export default function Hero() {
  return (
    <section className="relative flex flex-row h-svh w-full -z-10 p-5 rounded-3xl">
      <Image
        src={hero}
        className="w-full h-full object-cover hidden lg:block rounded-3xl"
        alt="The Furlong Building"
        quality={100}
        priority
        placeholder="blur"
      />
      <Image
        src={mobileHero}
        className="w-full h-full object-cover lg:hidden rounded-3xl"
        alt="The Furlong Building"
        quality={100}
        priority
        placeholder="blur"
      />
      {/* <div className="absolute bottom-5 right-5 w-fit h-fit p-5 bg-primaryWhite rounded-tl-3xl">
        <div className="absolute bottom-0 -left-6">
          <Curve variant={`bottom-right`} />
        </div>
        <div className="absolute -top-6 right-0">
          <Curve variant={`bottom-right`} />
        </div>

        <Link href="#section2" className="flex flex-row gap-2 items-center">
          Learn More
          <LuArrowDown />
        </Link>
      </div> */}
    </section>
  );
}
