import Link from "next/link";
import MobileMenu from "./MobileMenu";
import FurlongLogo from "./FurlongLogo";

export default function TheHeader() {
  return (
    <header>
      <nav className="grid grid-cols-2 lg:grid-cols-10 items-end gap-5 p-5">
        <Link href="/" className="lg:col-span-2">
          <FurlongLogo fill={`var(--primaryMid)`} />
        </Link>
        <div className="hidden lg:flex flex-col gap-2 lg:col-start-4 col-span-2 uppercase">
          <p className="font-mono text-primaryLight text-sm">Phone</p>
          <a href="#details" className="col-span-2 col-start-4 text-xl">
            123-456-7890
          </a>
        </div>
        <div className="hidden lg:flex flex-col gap-2 col-span-2 uppercase">
          <p className="font-mono text-primaryLight text-sm">Email</p>
          <a href="tel:+11234567890" className="col-span-2 col-start-4 text-xl">
            placeholder@email.com
          </a>
        </div>

        <div className="ml-auto lg:col-start-10">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
