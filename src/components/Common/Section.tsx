import { ReactNode } from "react";
import { motion } from "framer-motion";

const Section = ({ children, className, noAnimition }: { children: ReactNode; className?: string; noAnimition?: boolean }) => {
  return (
    <motion.section
      initial={{ opacity: noAnimition ? 1 : 0, y: noAnimition ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-screen flex flex-col items-center justify-center relative gap-10 overflow-x-hidden ${className} `}
    >
      {children}
    </motion.section>
  );
};

export default Section;
