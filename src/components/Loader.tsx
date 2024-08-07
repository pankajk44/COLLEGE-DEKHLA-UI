import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { headerLogo } from "@/assets";

const loaderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Loader() {
  return (
    <motion.div
      className="flex-center absolute inset-0 z-[999999999] h-screen w-full items-center justify-center overscroll-none bg-white"
      variants={loaderVariants}
      initial="visible"
      animate="hidden"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      <div className="backgroundGradient flex-center h-full w-full">
        <Image
          src={headerLogo}
          alt="loader"
          width={500}
          height={500}
          className="h-20 w-full animate-bounce object-contain"
        />
      </div>
    </motion.div>
  );
}
