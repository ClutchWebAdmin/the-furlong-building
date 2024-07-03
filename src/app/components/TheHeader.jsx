import Curve from "./Curve";
import FurlongLogo from "./FurlongLogo";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="absolute w-full">
      <nav className="flex flex-row items-start w-full h-fit">
        <Link
          className="flex w-3/5 lg:w-1/4 bg-primaryWhite p-5 rounded-br-3xl relative"
          href="/"
        >
          <div className="absolute top-5 -right-6">
            <Curve variant={`top-left`} />
          </div>
          <FurlongLogo fill={`var(--primaryMid)`} />
          <div className="absolute -bottom-6 left-5">
            <Curve variant={`top-left`} />
          </div>
        </Link>
        <div className="w-2/5 lg:w-full">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
