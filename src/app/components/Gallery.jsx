import Image from "next/image";
import Hand_Holding from "../../../public/Hand_Holding.jpg";
import Classic_vertical from "../../../public/Classic_vertical.jpg";
import Jhodpur_vertical from "../../../public/Jhodpur_vertical.jpg";
import Modern_Horizontal from "../../../public/Modern_Horizontal.jpg";
export function Gallery() {
  return (
    <div className="h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              width={700}
              height={100}
              src={Hand_Holding}
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              width={700}
              height={100}
              src={Classic_vertical}
              //   src={"https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div> */}
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              width={700}
              height={100}
              src={Jhodpur_vertical}
              //   src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-90"></div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              width={700}
              height={100}
              //   src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              src={Modern_Horizontal}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
