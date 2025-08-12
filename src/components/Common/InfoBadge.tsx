const InfoBadge = ({
  value,
  title,
  dark = false,
}: {
  value: string;
  title: string;
  dark?: boolean;
}) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full rounded-xl py-4 mq400:px-[0.125rem] mq380:px-[0.125rem] mq350:px-[0.0625rem] border-solid border-2 border-steelblue ${dark ? "bg-steelblue text-white" : "bg-white text-steelblue"      }`}>
      <div className="leading-[1.375rem] text-10xl mq380:text-9xl mq350:text-8xl">
        {value}
      </div>
      <div className="leading-[1.875rem] font-apfel-grotezk-base mq380:text-sm mq350:text-sm">
        {title}
      </div>
    </div>
  );
};

export default InfoBadge;
