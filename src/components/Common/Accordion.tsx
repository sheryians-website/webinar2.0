import { useState, ReactNode } from "react";
import { motion } from "framer-motion";


const Accordion = ({ question, children }: { question: string; children: ReactNode; }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-left px-8">
      <div className="flex justify-between items-center select-none" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-lg font-medium">{question}</div>
        <span>
          <svg className={`${!isOpen ? "rotate-180" : ""} size-3 align-top flex-shrink-0 `} width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M17.5781 9.63672L9.63965 1.69824L1.70117 9.63672" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="overflow-hidden">
        <div className="font-apfel-grotezk-base text-base text-gray-300 pt-3">{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
