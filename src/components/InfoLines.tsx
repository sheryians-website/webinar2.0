const InfoLines = ({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-5 border-solid border-b-[0.09375rem] pb-4 border-royalblue-200">
      <img
        decoding="async" loading="lazy"        className="w-[1.5rem] self-start"
        src={icon}
        alt=""
      />
      <div className="text-black self-start text-start font-apfel-grotezk-base text-[1.125rem] leading-[1.375rem]">
        {children}
      </div>
    </div>
  );
};

export default InfoLines;
