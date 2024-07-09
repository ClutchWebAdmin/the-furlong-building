"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../data/navLinks";
import { LuMenu } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import FurlongLogo from "./FurlongLogo";

export default function MobileMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        id="open-menu"
        aria-label="open-mobile-menu"
        onClick={toggleMenu}
        className={`flex lg:z-[9997] ${isMenuOpen && "invisible"}`}
      >
        <LuMenu className="text-5xl lg:text-7xl" />
      </button>

      {isMenuOpen && (
        <nav className="fixed flex flex-col justify-between items-center h-full inset-0 bg-primaryDark text-primaryWhite z-[9000] animate__animated animate__slideInRight p-5">
          <div className="flex flex-row gap-2 w-full justify-between items-center lg:items-start border-t border-l border-primaryLight rounded-tl-3xl pt-5 pl-5 pb-5 lg:p-10">
            <Link href={`/`} className="w-[200px] lg:w-1/2 text-xl">
              <FurlongLogo fill={`var(--primaryWhite)`} />
            </Link>
            <button
              id="close-menu"
              aria-label="close-menu"
              onClick={toggleMenu}
              className="z-[9998] text-5xl lg:text-7xl text-primaryWhite hover:text-primaryLight transition-colors duration-200 ease-in-out animate__animated animate__rotateIn"
            >
              <IoIosCloseCircle />
            </button>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row h-fit w-full justify-between text-5xl border-l border-b p-5 lg:p-10 border-primaryLight rounded-bl-3xl">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className="w-fit hover:text-primaryLight"
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ))}
            <a
              href="tel:+15038774653"
              target="_blank"
              className="w-fit hover:text-primaryLight"
              onClick={toggleMenu}
            >
              Call
            </a>
            <a
              href="mailto:info@traditionrep.com?subject=Requesting%more%info%for%The%Furlong%Building"
              target="_blank"
              className="w-fit hover:text-primaryLight"
              onClick={toggleMenu}
            >
              Email
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
