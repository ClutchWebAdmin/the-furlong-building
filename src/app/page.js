import Hero from "./components/Hero";

export const metadata = {
  title: "The Furlong Building",
  description: "",
  keywords: "",
  openGraph: {
    title: "The Furlong Building",
    description: "",
    siteName: "The Furlong Building",
    type: "website",
    locale: "en_US",
    url: "https://thefurlongbuilding.com",
    images: [
      {
        url: "https://thefurlongbuilding.com/images/og-image.png",
        alt: "The Furlong Building",
      },
    ],
  },
  images: [
    {
      url: "https://thefurlongbuilding.com/images/og-image.png",
      alt: "The Furlong Building",
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <section id="section2" className="h-[500px] w-full px-5 pb-5">
        <div className="w-full h-full border border-black rounded-3xl"></div>
      </section> */}
    </main>
  );
}
