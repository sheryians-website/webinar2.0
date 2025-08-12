import React from "react";
import { motion } from "framer-motion";

const WhiteButton = ({ onClick, className, children, }: { onClick?: () => void; className?: string; children: React.ReactNode; }) => {
  const randomRepeatDelay = Math.random() * 3;
  const randomShakeIntensity = Math.random() * 2 + 1;
  return (
    <motion.button
      style={{ transformOrigin: 'center' }}
      animate={{ x: [0, -randomShakeIntensity, randomShakeIntensity, -randomShakeIntensity, randomShakeIntensity, 0], rotate: [0, -randomShakeIntensity, randomShakeIntensity, -randomShakeIntensity, randomShakeIntensity, 0] }}
      transition={{ repeat: Infinity, duration: .7, ease: "easeInOut", repeatDelay: randomRepeatDelay }}
      onClick={onClick}
      className="bg-white text-black text-[1.375rem] text-center rounded-full w-fit px-20 font-medium py-2 my-4 shadow-lg shadow-[#fff5]"
      >
      {children}
    </motion.button>
  );
};

export default WhiteButton;
