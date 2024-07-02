import "./globals.css";
import "animate.css";
import { Analytics } from "@vercel/analytics/react";
import { quilon, rowan } from "./styles/fonts";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rowan.variable} ${quilon.variable}`}>
      <body className="min-h-svh w-screen max-w-full flex flex-col mx-auto relative antialiased font-sans scroll-smooth">
        <TheHeader />
        {children}
        <TheFooter />
        <Analytics />
      </body>
    </html>
  );
}
