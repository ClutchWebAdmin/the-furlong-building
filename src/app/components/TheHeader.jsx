import Link from "next/link";
import MobileMenu from "./MobileMenu";
import FurlongLogo from "./FurlongLogo";

export default function TheHeader() {
  return (
    <header>
      <nav className="grid grid-cols-2 lg:grid-cols-10 items-end gap-5 p-5 text-sm">
        <Link href="/" className="lg:col-span-2">
          <FurlongLogo fill={`var(--primaryMid)`} />
        </Link>
        <a href="#details" className="hidden lg:flex col-span-2 col-start-4">
          XXX-XXX-XXXX
        </a>
        <a href="#photos" className="hidden lg:flex col-span-2">
          xxxxxx@email.com
        </a>
        <div className="ml-auto lg:col-start-10">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
