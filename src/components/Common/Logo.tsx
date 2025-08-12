const Logo = () => {
  return (
    <div className="h-9 text-left flex gap-2 items-center justify-center">
      <img
        decoding="async"
        loading="lazy"
        className=" w-[1.65rem] object-contain"
        alt=""
        src="https://ik.imagekit.io/sheryians/CG-01/logo_ODHDaSjRCn.png"
      />
      <div className=" border-black border-r-[0.05625rem] border-solid box-border w-[0.05625rem] h-[1.85625rem]" />
      <span className="leading-[1.1125rem] text-[1rem]">
        Sheryians Coding
        <br />
        School
      </span>
    </div>
  );
};

export default Logo;
