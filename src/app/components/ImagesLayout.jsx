import Image from "next/image";
import logo from "../../../public/Logo.png";
export function ImagesLayout() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3 bg-white max-h-80 max-w-2xl w-96">
        <Image src={logo} className="h-52" alt='Image Details'/>
      </div>
      <div className="col-span-2">
        <Image src={logo} alt='Image Details'/>
      </div>
      <div className="row-span-2 col-span-2">
        <Image src={logo} alt='Image Details'/>
      </div>
    </div>
  );
}

export default ImagesLayout;
