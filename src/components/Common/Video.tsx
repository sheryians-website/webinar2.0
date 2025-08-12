import { useEffect, useRef, useState, FC } from "react";
import { motion } from "framer-motion";

interface VideoProps {
  src?: string;
  thumbnail?: string;
  className?: string;
  isPlayeble?: boolean;
  aspectRatio?: number;
  [key: string]: any;
}

const Video = ({ className = "", aspectRatio = 16 / 9, isPlayeble = false, src, ...opts }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [played, setPlayed] = useState(false);

  const childClasses = "absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl";

  const onClick = () => {
    if (ref.current && isPlayeble) {
      setPlayed(prev => !prev);
      ref.current.paused ? ref.current.play() : ref.current.pause();
    }
  };

  useEffect(() => {
    if (!isPlayeble && ref.current) {
      ref.current.pause();
      setPlayed(false);
    }
  }, [isPlayeble]);

  return (
    <div onClick={onClick} className={`relative w-full overflow-hidden ${className}`} style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}>
      <video ref={ref} src={src} className={childClasses} {...opts} />
      {isPlayeble && !played && (
        <motion.svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          className="absolute left-1/2 top-1/2 size-14"
          initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d="M53.8456 27.7939C53.8456 42.1819 42.1819 53.8456 27.7939 53.8456C13.4059 53.8456 1.74219 42.1819 1.74219 27.7939C1.74219 13.4059 13.4059 1.74219 27.7939 1.74219C42.1819 1.74219 53.8456 13.4059 53.8456 27.7939Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.1875 19.5156L35.6024 27.7922L23.1875 36.0688V19.5156Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      )}
    </div>
  );
};

export default Video;
