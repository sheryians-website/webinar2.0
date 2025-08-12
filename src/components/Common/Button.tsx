import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, className, children, }: { onClick?: () => void; className?: string; children: React.ReactNode; }) => {
  const randomRepeatDelay = Math.random() * 3;
  const randomShakeIntensity = Math.random() * 2 + 1;
  return (
    <motion.button
      style={{ transformOrigin: 'center' }}
      animate={{ x: [0, -randomShakeIntensity, randomShakeIntensity, -randomShakeIntensity, randomShakeIntensity, 0], rotate: [0, -randomShakeIntensity, randomShakeIntensity, -randomShakeIntensity, randomShakeIntensity, 0] }}
      transition={{ repeat: Infinity, duration: .7, ease: "easeInOut", repeatDelay: randomRepeatDelay }}
      onClick={onClick}
      className={`w-fit rounded-full bg-gradient-to-r from-[#204c87] to-[#0a6df0] h-14 px-10 text-white text-3xl text-nowrap font-apfel-grotezk shadow-lg shadow-cornflowerblue-100 hover:opacity-90 transition-opacity ${className}`}>
      {children}
    </motion.button>
  );
};

export default Button;
