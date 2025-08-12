import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import UniquePoint from "./UniquePoint";
import Heading from "./Common/Heading";
import TextBlue from "./Common/TextBlue";

const UniqueWorkshop = ({ uniquePoints }: { uniquePoints: { title: string; description: string }[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 60%", "end 60%"], });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <div>
      <Heading> What Makes This Workshop <TextBlue>Unique?</TextBlue></Heading>

      <div ref={containerRef} className="flex flex-col text-left gap-7 relative mt-10">
        <div className="relative gap-7 flex flex-col ">
          <div className="bg-gray-100 h-[110%] w-[0.1875rem] absolute top-4 left-[0.5625rem]"></div>
          <motion.div ref={barRef} style={{ height }} className="w-[0.1875rem] bg-royalblue-200 absolute top-4 left-[0.5625rem]" />
          {uniquePoints.slice(0, -1).map((point, index) => (
            <UniquePoint
              key={index}
              bar={barRef}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        <div>
          <UniquePoint
            bar={barRef}
            title={uniquePoints[uniquePoints.length - 1].title}
            description={uniquePoints[uniquePoints.length - 1].description}
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueWorkshop;
