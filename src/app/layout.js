import "./globals.css";
import "animate.css";
import { Analytics } from "@vercel/analytics/react";
import { excon, spaceMono } from "./styles/fonts";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${excon.variable} ${spaceMono.variable}`}>
      <body className="min-h-svh max-w-full relative antialiased scroll-smooth">
        <TheHeader />
        {children}
        <TheFooter />
        <Analytics />
      </body>
    </html>
  );
}
