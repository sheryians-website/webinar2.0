import React, { useState } from "react";
import { motion } from "framer-motion";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
    const [cards, setCards] = useState(children);

    const moveToEnd = (from: number) => {
        setCards(prevCards => {
            const newArr = [...prevCards];
            const [movedItem] = newArr.splice(from, 1);
            newArr.push(movedItem);
            return newArr;
        });
    };

    return (
        <ul className="relative w-[350px] h-[220px]">
            {cards.map((child, index) => (
                <motion.li
                    key={index}
                    className={`absolute w-[350px] h-[220px] rounded-lg list-none ${index === 0 ? 'cursor-grab' : 'cursor-auto'}`}
                    style={{ zIndex: cards.length - index }}
                    animate={{
                        top: index * -CARD_OFFSET,
                        scale: 1 - index * SCALE_FACTOR,
                        x: "-50%",
                        left: "50%",
                    }}
                    drag={index === 0 ? "y" : false}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    onDragEnd={() => moveToEnd(index)}
                >
                    {child}
                </motion.li>
            ))}
        </ul>
    );
};

export default CardStack;