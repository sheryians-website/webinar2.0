const StoryCard = ({
  image,
  name,
  role,
  story,
}: {
  image: string;
  name: string;
  role: string;
  story: string;
}) => {
  return (
    <div className="w-72 h-56 bg-white rounded-lg px-5 py-3">
      <div className="flex">
        <div className=" overflow-hidden w-[3.89375rem] h-[3.89375rem] bg-gray-100-500 rounded-full shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,.4)] flex-shrink-0 ">
          <img
            decoding="async" loading="lazy"            src={image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center ms-4">
          <div className="tracking-[-0.01em] leading-4 text-2xl-1">{name}</div>
          <div className=" text-sm  tracking-[-0.01em] leading-[1.4625rem]">
            {role}
          </div>
        </div>
      </div>
      <div className="font-apfel-grotezk-base text-base mt-4 leading-5 w-60 pb-5">
        {story}
      </div>
    </div>
  );
};

export default StoryCard;
