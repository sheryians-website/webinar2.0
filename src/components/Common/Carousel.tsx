import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

const Carousel: React.FC<{
  navType?: number;
  children: ReactNode;
  className?: string;
  onIndexChange?: (index: number) => void;
}> = ({ navType: mode = 1, children, className, onIndexChange }) => {
  const items = React.Children.toArray(children);
  const totalItems = items.length;
  const [currentIndex, setCurrentIndex] = useState(
    Math.round(totalItems / 2) - 1
  );
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const startX = useRef(0);
  const isSwiping = useRef(false);

  const updateIndex = (newIndex: number, isSwipe: boolean = false) =>
    setCurrentIndex(
      isSwipe
        ? Math.max(0, Math.min(newIndex, totalItems - 1))
        : (newIndex + totalItems) % totalItems
    );

  const calculateTranslateX = () => {
    const currentItem = itemRefs.current[currentIndex];
    if (currentItem) {
      const itemWidth = currentItem.offsetWidth || 0;
      const centerOffset = window.innerWidth / 2 - itemWidth / 2;
      return -currentItem.offsetLeft + centerOffset;
    }
    return 0;
  };

  useEffect(() => {
    setTranslateX(calculateTranslateX());
    onIndexChange?.(currentIndex);
  }, [currentIndex, items, onIndexChange]);

  useEffect(() => {
    const handleResize = () => setTranslateX(calculateTranslateX());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    const diffX = startX.current - e.touches[0].clientX;
    if (Math.abs(diffX) > 50) {
      updateIndex(currentIndex + (diffX > 0 ? 1 : -1), true);
      isSwiping.current = false;
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => (isSwiping.current = false)}
    >
      <motion.div
        className="flex gap-2"
        animate={{ x: translateX }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {items.map((child, index) => (
          <motion.div
            ref={(el) => (itemRefs.current[index] = el)}
            animate={{ scale: index === currentIndex ? 1 : 0.9 }}
            key={index}
            className="w-full flex items-center justify-center"
          >
            {child}
          </motion.div>
        ))}
      </motion.div>

      <div
        className={`flex ${
          mode === 1
            ? "justify-center gap-14 mt-7"
            : "gap-4 justify-center mt-5 items-center"
        }`}
      >
        <Arrow
          onClick={() => updateIndex(currentIndex - 1)}
          reverse={false}
          circle={mode === 1}
        />
        {mode === 2 &&
          items
            .concat(items)
            .slice(currentIndex, currentIndex + 4)
            .map((child: any, i) => (
              <img
                decoding="async" loading="lazy"                onClick={() => setCurrentIndex(Number(child.key) * 10)}
                alt="image"
                src={child.props.src}
                key={i}
                className="size-14 rounded-md"
              />
            ))}
        <Arrow
          onClick={() => updateIndex(currentIndex + 1)}
          reverse={true}
          circle={mode === 1}
        />
      </div>
    </div>
  );
};

const Arrow = ({
  onClick,
  reverse,
  circle,
}: {
  onClick: () => void;
  reverse: boolean;
  circle: boolean;
}) =>
  circle ? (
    <svg
      onClick={onClick}
      className={`${reverse ? "rotate-180" : ""} size-10`}
      width="40"
      height="40"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23"
        cy="23"
        r="23"
        transform="matrix(0 -1 -1 0 46.9182 46.2471)"
        fill="#63A6FF"
      />
      <path
        d="M27.4762 30.3633L20.3602 23.2473L27.4762 16.1314"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      onClick={onClick}
      className={`${reverse ? "rotate-180" : ""} size-2`}
    >
      <path
        d="M7.07812 1.73047L1.50391 7.30469L7.07813 12.8789"
        stroke="#6F6F6F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

export default Carousel;
