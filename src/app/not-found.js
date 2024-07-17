"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="h-svh grid place-content-center border-l border-b border-primaryLight text-center items-center gap-5 mx-5 mb-5 rounded-bl-3xl">
        <h1 className="text-3xl font-medium lg:font-normal lg:text-5xl">
          404 Page Not Found
        </h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <p>The requested page cannot be found.</p>
          <Link
            href={`/`}
            target="_blank"
            className="hidden md:flex bg-primaryMid text-primaryWhite hover:bg-primaryLight transition-colors duration-200 ease-in-out w-fit h-fit px-4 py-2 rounded-3xl"
          >
            Go home
          </Link>
        </div>
      </section>
    </main>
  );
}
