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
        className={`text-5xl lg:hidden lg:z-[9997] ${isMenuOpen && "hidden"}`}
      >
        <LuMenu />
      </button>
      <button
        id="open-menu"
        aria-label="open-mobile-menu"
        onClick={toggleMenu}
        className={`hidden lg:flex lg:z-[9997] ${isMenuOpen && "hidden"}`}
      >
        <LuMenu className="text-6xl" />
      </button>

      {isMenuOpen && (
        <nav className="fixed flex flex-col justify-between h-full inset-0 bg-primaryDark text-primaryWhite z-[9000] animate__animated animate__slideInRight p-5 lg:p-10">
          <div className="flex flex-row gap-2 justify-between">
            <Link href={`/`} className="w-1/2 text-xl">
              <FurlongLogo fill={`var(--primaryWhite)`} />
            </Link>
            <button
              id="close-menu"
              aria-label="close-menu"
              onClick={toggleMenu}
              className="z-[9998] text-5xl lg:text-6xl text-primaryWhite hover:text-primaryLight transition-colors duration-200 ease-in-out top-5 right-5 lg:top-10 lg:right-10 fixed animate__animated animate__rotateIn"
            >
              <IoIosCloseCircle />
            </button>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row h-fit w-full justify-between text-5xl border-l border-b px-5 pb-5 border-primaryLight rounded-bl-3xl">
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
              href="mailto:email@email.com"
              target="_blank"
              className="w-fit hover:text-primaryLight"
              onClick={toggleMenu}
            >
              Request Info
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
