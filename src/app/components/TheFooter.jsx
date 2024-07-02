import Image from "next/image";

export default function TheFooter() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center w-full h-fit p-5 bg-primaryDark text-primaryLight text-sm">
      <div className="flex justify-center lg:justify-end order-3 lg:order-3">
        Logo
      </div>
      <a
        href="https://clutchpropertymanagement.com"
        target="_blank"
        className="text-center lg:text-start lg:order-1"
      >
        Clutch Property Management
      </a>
      <h6 className="flex justify-center order-3 lg:order-2">
        © 2024 The Furlong Building
      </h6>
    </footer>
  );
}
