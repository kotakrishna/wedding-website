"use client";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import GroomPic from "../../../public/Groom.jpg";
import BridePic from "../../../public/Bride.jpg";
import {
  motion as Motion,
  useTransform,
  MotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
const greatVibe = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Images({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section>
      <div ref={ref}>
        <Image
          // width={50}
          // height={50}
          alt="image"
          className="h-auto lg:max-w-2xl rounded-lg shadow-lg shadow-cyan-500/50"
          src={logo}
        />
        <h1 color="black">DATA {id}</h1>
        {/* <img src={`/${id}.jpg`} alt="A London skyscraper" /> */}
      </div>
      <Motion.h2 style={{ y, color: "black" }}>{`#00${id}`}</Motion.h2>
    </section>
  );
}

function HeroElement() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <section className="">
        <div className="container text-center  flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between lg:pb-0 lg:pt-2">
          {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"></div> */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-center">
            <h1 className="text-5xl font-bold  sm:text-6xl">
              We invite you to Our
              <span className="bg-gradient-to-br from-blue-600 to-red-500 bg-clip-text text-transparent">
                {" "}
                Celebration
              </span>
            </h1>
          </div>
        </div>
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center lg:pb-0 lg:pt-2">
          <BoxContainer title="Bride" />
          <BoxContainer title="Groom" />
        </div>
        <div className="container  justify-center p-2 mx-auto sm:py-12 lg:justify-between sm:flex lg:grid-flow-row">
          {/* <div className={` ${greatVibe.className}`}> */}
          <Motion.div
            whileHover={{ scale: 1.2 }}
            className={` ${greatVibe.className} ml-2`}
            animate={{ rotate: 10 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <Image
              alt="image"
              className="h-auto lg:max-w-2xl rounded-lg shadow-lg shadow-cyan-500/50"
              src={logo}
            />
          </Motion.div>
          {/* </div> */}
        </div>
        <div className="container  justify-end lg:-mt-64 mx-auto sm:py-12 sm:flex lg:grid-flow-row">
          <div
            className={`flex ${greatVibe.className} lg:text-6xl flex-col justify-center items-center mt-4 mb-2 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:text-5xl md:text-center  sm:text-center text-3xl `}>
            <p>Kota Sai Krishna Reddy</p>
            <br />
            <p className="lg:text-7xl text-4xl">Weds</p>
            <br />
            <p className="mb-8 mt-2">Sheelam Samveda Reddy</p>
          </div>
        </div>
      </section>
    </>
  );
}

const BoxContainer = ({ title = "Bride" }) => {
  return (
    <div className="container flex relative justify-center p-2 mx-auto sm:py-12 lg:justify-between sm:flex lg:grid-flow-row">
      <Image
        alt="image"
        className="h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg shadow-cyan-500/50"
        src={title === "Bride" ? BridePic : GroomPic}
      />
      <h2
        className={`${greatVibe.className} absolute text-4xl md:2xl bottom-4 left-1/2 -translate-x-1/2`}>
        {title === "Bride" ? "Bride - Samveda" : "Groom - Kota"}
      </h2>
    </div>
  );
};

export default HeroElement;
