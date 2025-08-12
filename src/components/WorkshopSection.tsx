import TopicCard from "./Cards/TopicCard";
import { motion, useScroll, useTransform } from "framer-motion";

type ComponentProps = {
  title: string;
  description: string;
  highlight: string;
};

const WorkshopSection = ({ color, hour, components, }: { color: string; hour: string; components: ComponentProps[] }) => {
  console.log(color);
  return (
    <div className="relative px-4">
      <div className="rounded-2xs bg-lavender-100 font-apfel-grotezk p-5 pb-10 flex flex-col gap-7 items-center mq1024:items-stretch ">
        <div className={`${color == '#0a6df0' ? `bg-[#0a6df0]` : 'bg-[#6571ff]'}  mq1024:text-white mq1024:text-xl text-14xl leading-[24px] w-fit px-4 py-3 rounded-8xs mt-5 [@media(max-width:1666px)]:sticky top-5`}>{hour}</div>
        <div className="flex flex-wrap mq1024:flex-col gap-7 justify-center text-white relative">
          {components.map((item, index) => (
            <div key={index} className={`sticky`} style={{ top: `calc(6rem + ${index * 10}px)` }}>
              <TopicCard color={color} title={item.title} description={item.description} highlight={item.highlight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;
