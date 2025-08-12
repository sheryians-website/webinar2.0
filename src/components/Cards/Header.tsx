import Marquee from "react-fast-marquee";

const Header = () => (
  <header className="flex items-center w-screen h-[3.4375rem] text-6xl font-apfel-grotezk-base bg-gradient-to-r from-[#fb985f] to-[#f8fb68]">
    <Marquee autoFill={true}>
      {["Buy now", ".", "Start Learning", "."].map((text, index) => (
        <span className="ml-2" key={index}>{text}</span>
      ))}
    </Marquee>
  </header>
);

export default Header;
