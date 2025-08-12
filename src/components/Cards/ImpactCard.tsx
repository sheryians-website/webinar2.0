const ImpactCard = ({
  imageSrc,
  title,
  info,
}: {
  imageSrc: string;
  title: string;
  info: string;
}) => (
  <div className="flex flex-col items-center mx-7 max-w-md shadow-[0_0_0.3125rem_0.0625rem_rgba(0,0,0,0.1)] rounded-lg overflow-hidden p-3 ">
    <img
      decoding="async"
      loading="lazy"
      className="w-full max-h-[7.5rem] mq1024:max-h-max object-cover"
      alt=""
      src={imageSrc}
    />
    <div className="title mt-4">
      <div className="leading-[1.75rem] font-normal font-inherit text-8xl text-darkslateblue">
        {title}
      </div>
      <div className="text-[1.125rem] leading-[1.25rem] font-apfel-grotezk-base my-2 text-gray-100">
        {info}
      </div>
    </div>
  </div>
);
export default ImpactCard;
