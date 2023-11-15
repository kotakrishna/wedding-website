import Image from "next/image";
import logo from "../../../public/Logo.png";
import { motion } from "framer-motion";
export function Header() {
  return (
    <nav className="sticky top-0 flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <motion.div
          className="ml-2"
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 5 }}>
          <Image src={logo} width={50} alt="Picture of the author" />
        </motion.div>
        <span>Wedding Invitation From Kota and Sheelam</span>
      </div>
    </nav>
  );
}

export default Header;
