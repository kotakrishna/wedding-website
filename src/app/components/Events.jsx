"use client";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import Haldi from "../../../public/Haldi.jpg";
import PelliKuthuru from "../../../public/PelliKuthuru.jpg";
import Mehandi from "../../../public/Mehandi.webp";
import Countdown from "react-countdown";
const greatVibe = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Completionist = () => (
  <p
    className={`${greatVibe.className} absolute text-4xl md:2xl bottom-4 right-1/4 -translate-x-1/4`}>
    Completed
  </p>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <p
        className={`${greatVibe.className} absolute text-3xl md:xl bottom-4 right-1 -translate-x-1/4 lg:right-1/4`}>
        {days}:{hours}:{minutes}:{seconds}
      </p>
    );
  }
};

const BoxContainer = ({
  imageSrc,
  title,
  date = "2023/11/22",
  path = "https://maps.app.goo.gl/aW4dTVSq5sVDtfVX9",
}) => {
  const dateItem = new Date(date);
  return (
    <div className="container flex relative justify-center p-2 mx-auto sm:py-12 lg:justify-between sm:flex lg:grid-flow-row">
      <a
        href={path}
        target="_blank"
        className="group relative flex h-42 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
        <Image
          width={600}
          height={600}
          alt="image"
          className="h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg shadow-cyan-500/50"
          // src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=400"
          src={imageSrc}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      </a>
      <div className="flex flex-row">
        <h2
          className={`${greatVibe.className} absolute text-4xl md:xl bottom-4 left-1 -translate-x-1/7 lg:left-1/6`}>
          {title}
        </h2>
        <Countdown date={dateItem} renderer={renderer} />
      </div>
    </div>
  );
};

function Events() {
  return (
    <section>
      <div className="container text-center  flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:pb-0">
        <div className="flex flex-col justify-center text-center rounded-sm lg:text-center">
          <div
            className={`flex ${greatVibe.className} lg:text-5xl flex-col justify-center items-center text-center mt-4 mb-2 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:text-4xl md:text-center  sm:text-center text-3xl `}>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div
        className={`flex ${greatVibe.className} lg:text-4xl flex-col justify-center items-center text-center mt-4 mb-2 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:text-3xl md:text-center  sm:text-center text-2xl `}>
        <p>Bride</p>
      </div>
      <div className="container grid grid-flow-col grid-rows-3 justify-center mx-auto sm:grid-rows-2 lg:py-24 lg:justify-center lg:pb-0 lg:pt-2">
        <BoxContainer
          imageSrc={Haldi}
          title={"Haldi"}
          date="2023/11/20 15:00"
        />
        <BoxContainer
          imageSrc={Mehandi}
          title={"Mehandi"}
          date="2023/11/21 10:00"
        />
        <BoxContainer
          imageSrc={PelliKuthuru}
          title={"Pelli Kuthuru"}
          date="2023/11/22 16:00"
        />
      </div>
      <div
        className={`flex ${greatVibe.className} lg:text-4xl flex-col justify-center items-center text-center mt-4 mb-2 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:text-3xl md:text-center  sm:text-center text-2xl `}>
        <p>Groom</p>
      </div>
      <div className="container grid grid-flow-col grid-rows-3 justify-center mx-auto sm:grid-rows-2 lg:py-24 lg:justify-center lg:pb-0 lg:pt-2">
        <BoxContainer
          imageSrc={Mehandi}
          title={"Mehandi"}
          date="2023/11/20 12:00"
          path="https://maps.app.goo.gl/43nixHXmCDYABRbg7"
        />
        <BoxContainer
          imageSrc={Haldi}
          title={"Haldi"}
          date="2023/11/22 09:30"
          path="https://maps.app.goo.gl/43nixHXmCDYABRbg7"
        />
        <BoxContainer
          imageSrc={PelliKuthuru}
          title={"Pelli Koduku"}
          date="2023/11/22 13:30"
          path="https://maps.app.goo.gl/43nixHXmCDYABRbg7"
        />
      </div>
    </section>
  );
}

export default Events;
