import Image from "next/image";
import placeholder from "../../../public/images/hero.png";

export default function Hero() {
  return (
    <section className="flex flex-row h-svh relative -z-10">
      <Image
        src={placeholder}
        className="w-full h-full object-cover"
        alt="The Furlong Building"
        quality={100}
        priority
        placeholder="blur"
      />
      <div className="absolute hidden lg:grid grid-cols-1 lg:grid-cols-3 items-end p-5 w-full h-full text-lg">
        <h3>Address Line 1</h3>
        <h3 className="justify-center flex">City, State</h3>
        <h3 className="justify-end flex">Zip</h3>
      </div>

      <div className="absolute grid lg:hidden grid-cols-1 items-end p-5 w-full h-full">
        <h3 className="text-3xl">
          Address Line 1
          <br />
          City, State ZIP
        </h3>
      </div>
    </section>
  );
}
