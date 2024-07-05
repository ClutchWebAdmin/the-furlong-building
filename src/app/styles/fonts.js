import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";

export const excon = localFont({
  src: "./fonts/Excon-Variable.woff2",
  display: "swap",
  variable: "--font-excon",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-spaceMono",
  display: "swap",
});
