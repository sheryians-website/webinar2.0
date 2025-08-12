import React, { Suspense, lazy } from "react";

const Marquee = lazy(() => import("react-fast-marquee"));

const MovingLogos = ({ logos }: { logos: string[] }) => {
  return (
    <div className="flex w-full flex-col gap-5 -mb-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Marquee speed={40} autoFill={true}>
          {logos.slice(0, 6).map((logo, index) => (
            <img
              decoding="async"
              loading="lazy"
              className="h-6 w-full object-contain ml-10"
              key={index}
              src={logo}
              alt={`logo-${index}`}
            />
          ))}
        </Marquee>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Marquee speed={40} autoFill={true} direction="right">
          {logos.slice(6, 13).map((logo, index) => (
            <img
              className="h-11 w-full object-contain ml-10"
              key={index}
              src={logo}
              alt={`logo-${index}`}
              loading="lazy"
            />
          ))}
        </Marquee>
      </Suspense>
    </div>
  );
};

export default MovingLogos;
