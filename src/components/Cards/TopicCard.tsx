
export type TopicCardType = {
  className?: string;
  title?: string;
  color?: string;
  description?: string;
  highlight?: string;
  index?: number;
};

const TopicCard = ({ index, title, description, highlight, color }: TopicCardType) => {
  return (
    <div className={`flex flex-col ${color == '#0a6df0' ? `bg-[#0a6df0]` : 'bg-[#6571ff]'} rounded-3xs-2 px-6 py-8 h-[19rem] mq1024:w-auto w-[23.75rem]  justify-between border-solid border border-white/55`}>
      <div className="flex flex-col gap-3">
        <div className="text-6xl leading-[1.875rem] mq380:text-[1.375rem] mq380:leading-[1.625rem]">{title}</div>
        <ul className="m-0 px-[0.8125rem]">
          {description?.split("\n").map((line, index) => <li className="text-[1.15625rem] leading-[1.5625rem] font-apfel-grotezk-base mq380:text-[1rem] mq380:leading-[1.25rem]" key={index}>{line}</li>)}
        </ul>
      </div>
      <div className="flex bg-white rounded-md gap-2 text-black px-2 py-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6 flex-shrink-0">
          <path d="M11.6753 22.2861C17.456 22.2861 22.1421 17.6 22.1421 11.8193C22.1421 6.03868 17.456 1.35254 11.6753 1.35254C5.89467 1.35254 1.20853 6.03868 1.20853 11.8193C1.20853 17.6 5.89467 22.2861 11.6753 22.2861Z" fill="#0A6DF0" stroke="#0A6DF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.3628 8.59668L9.91751 15.042L6.98782 12.1123" fill="#0A6DF0" />
          <path d="M16.3628 8.59668L9.91751 15.042L6.98782 12.1123" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[1rem] leading-[1.3125rem] mq400:text-[1rem] mq380:leading-[1.125rem]">{highlight}</span>
      </div>
    </div>
  );
};
export default TopicCard;
