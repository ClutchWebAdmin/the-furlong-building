import Image from "next/image";
import state from "../../public/images/217-state-st.png";
import front from "../../public/images/140-front-st.png";

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
    <main className="gap-20">
      <section className="grid grid-cols-2 lg:grid-cols-10 gap-5 mx-5 border-l rounded-bl-3xl border-b   pb-5 lg:pb-10 border-primaryLight">
        <div className="col-span-full lg:col-span-3 flex flex-col gap-5 order-2 lg:order-1 pl-5 lg:pl-10">
          <Image
            src={front}
            alt="The Furlong Building"
            className="rounded-3xl col-span-full w-full h-full object-cover"
            placeholder="blur"
            priority
          />
          <div className=" w-full flex flex-col gap-2">
            <h5 className="uppercase text-sm xl:text-base text-red-900 font-medium -mb-1">
              For Sale
            </h5>
            <p className="text-xl xl:text-2xl">
              217 State St & 140 Front St
              <br />
              Salem, Oregon, 97301
            </p>
            <h3 className="text-5xl font-medium ">$2,495,000</h3>
          </div>
        </div>

        <div className="col-span-full lg:col-start-4 lg:col-span-7 order-1 lg:order-2 pl-5 lg:pl-0">
          <Image
            src={state}
            alt="The Furlong Building"
            className="w-full h-full object-cover rounded-3xl"
            placeholder="blur"
            priority
          />
        </div>
      </section>

      <section className="rounded-bl-3xl border-l border-b border-primaryLight mx-5 grid grid-cols-2 lg:grid-cols-10 gap-10 pl-5 lg:pl-10 pb-5 lg:pb-10">
        <h2 className="col-span-full text-4xl lg:text-5xl">Property Details</h2>

        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-2 col-span-full">
          <h6 className="font-mono uppercase text-sm text-primaryLight col-span-full">
            Summary
          </h6>
          <div className="flex flex-col gap-2 col-span-full lg:col-span-1">
            <p className="text-xl">
              Step into the heart of Salem&apos;s bustling downtown with the
              opportunity to lease, purchase, or embark on a joint venture at
              the Historic Furlong Building. Nestled at the signaled
              intersection of the Central Business District, this property
              boasts prime visibility and a high-traffic locale.
            </p>
          </div>

          <p className="text-xl col-span-full lg:col-span-1 pt-5 lg:pt-0">
            With two distinct buildings totaling 25,126 SF, including a unique
            upper-level parking garage, and positioned directly across from the
            scenic 26 acre Riverfront Park, seize the chance to establish your
            presence in this vibrant retail center.
          </p>
        </div>

        <div className="flex flex-col gap-2 col-span-full lg:col-span-5">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            Name
          </h6>
          <p className="text-xl">Historic Furlong Building</p>
        </div>

        <div className="flex flex-col gap-2 col-span-full lg:col-span-5">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            Location
          </h6>
          <p className="text-xl">Central Business District</p>
        </div>

        <div className="flex flex-col gap-2 col-span-full lg:col-span-3">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            Address
          </h6>
          <p className="text-xl">217 State St & 140 Front St</p>
        </div>

        <div className="flex flex-col gap-2 lg:col-span-2">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            City
          </h6>
          <p className="text-xl">Salem</p>
        </div>

        <div className="flex flex-col gap-2  lg:col-span-2">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            State
          </h6>
          <p className="text-xl">Oregon</p>
        </div>

        <div className="flex flex-col gap-2 lg:col-span-2">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            Zip Code
          </h6>
          <p className="text-xl">97301</p>
        </div>

        <div className="flex flex-col gap-2 col-span-full lg:col-span-5">
          <h6 className="font-mono uppercase text-sm text-primaryLight">
            Map View
          </h6>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.0756271093355!2d-123.041991286519!3d44.9410963465145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bfff72dc350ceb%3A0x9a27731d2444ba49!2s217%20State%20St%2C%20Salem%2C%20OR%2097301!5e0!3m2!1sen!2sus!4v1720221687393!5m2!1sen!2sus"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full aspect-square lg:h-full lg:aspect-auto rounded-3xl"
          ></iframe>
        </div>

        <div className="grid grid-cols-2 gap-10 col-span-full lg:col-span-5">
          <div className="flex flex-col gap-2 col-span-full">
            <h6 className="font-mono uppercase text-sm text-primaryLight">
              Highlights
            </h6>
            <p className="text-xl">
              Street parking, private upper level parking garage, high
              visibility location, signaled intersection
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-mono uppercase text-sm text-primaryLight">
              Building Size
            </h6>
            <p className="text-xl">25,126 ft²</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-mono uppercase text-sm text-primaryLight">
              Land Area
            </h6>
            <p className="text-xl">0.31 acres</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-mono uppercase text-sm text-primaryLight">
              Price per sqft
            </h6>
            <p className="text-xl">$99.30</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-mono uppercase text-sm text-primaryLight">
              Total Price
            </h6>
            <p className="text-xl">$2,495,000</p>
          </div>
        </div>
      </section>
    </main>
  );
}
