import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const UniquePoint = ({
  bar,
  title,
  description,
}: {
  bar: React.RefObject<HTMLDivElement>;
  title: string;
  description: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    function loop() {
      if (bar.current && ref.current && isInView) {
        setInView(
          bar.current.getBoundingClientRect().bottom >
          ref.current.getBoundingClientRect().top
        );
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col relative ps-10">
      <div className="absolute top-0 left-0 mt-2 h-full flex flex-col items-center">
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-10 size-5"
        >
          <circle
            cx="11.1016"
            cy="10.207"
            r="10.1953"
            className={`transition-fill duration-500 ease-in-out ${inView ? "fill-royalblue-200" : "fill-gray-100/25"
              }`}
          />
          <circle cx="11.1055" cy="10.207" r="4.15234" fill="white" />
        </svg>
      </div>

      <span className="leading-[2.3125rem] text-[1.7rem] tracking-tight">{title}</span>
      <span className="font-apfel-grotezk-base text-gray-200 text-[1.1rem] tracking-wide leading-[1.25rem]">
        {description}
      </span>
    </div>
  );
};

export default UniquePoint;
