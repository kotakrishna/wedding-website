"use client";
import { Great_Vibes } from "next/font/google";
const greatVibe = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});
export default function Title() {
  return (
    <div className="container text-center  flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:pb-0 lg:pt-2">
      {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"></div> */}

      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-center">
        <div
          className={`flex ${greatVibe.className} lg:text-6xl flex-col justify-center items-center mt-4 mb-2 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] md:text-5xl md:text-center  sm:text-center text-3xl `}>
          <p>Kota's and Sheelam's Wedding Invitation</p>
        </div>
      </div>
    </div>
  );
}
