"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../data/navLinks";
import { LuMenu } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";

import FurlongLogo from "./FurlongLogo";

export default function Menu() {
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
        className={`text-primaryWhite hover:text-primaryMid transition-colors duration-200 ease-in-out text-5xl lg:z-[9997] top-10 right-10 fixed ${
          isMenuOpen && "hidden"
        }`}
      >
        <LuMenu />
      </button>

      {isMenuOpen && (
        <nav className="fixed flex flex-col justify-between h-full inset-0 bg-primaryDark text-primaryWhite z-[9000] animate__animated animate__slideInRight p-10">
          <div className="flex flex-row gap-2 justify-between">
            <Link href={`/`} className="w-3/4 lg:w-1/2 text-xl">
              <FurlongLogo fill={`var(--primaryWhite)`} />
            </Link>
            <button
              id="close-menu"
              aria-label="close-menu"
              onClick={toggleMenu}
              className="z-[9998] text-5xl text-primaryWhite hover:text-primaryLight transition-colors duration-200 ease-in-out top-10 right-10 fixed animate__animated animate__rotateIn"
            >
              <IoIosCloseCircle />
            </button>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row h-fit w-full justify-between text-5xl">
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
              Email Us
            </a>
            <a
              href="tel:+11234567890"
              target="_blank"
              className="w-fit hover:text-primaryLight"
              onClick={toggleMenu}
            >
              Call Us
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
