import { useState } from "react";
import { motion } from "framer-motion";

const YoutubeVideo = ({
  videoId = "BoJ2ik0xDGQ",
  className = "",
  aspectRatio = 16 / 9,
}) => {
  const [played, setPlayed] = useState(false);

  return (
    <div className="">
      <div
        onClick={() => setPlayed(true)}
        className={`relative w-full rounded-xl overflow-hidden bg-black bg-center bg-no-repeat bg-contain ${className}`}
        style={{
          paddingTop: `${(1 / aspectRatio) * 100}%`,
          backgroundImage: `url(https://ik.imagekit.io/sheryians/CG-01/WhatsApp%20Image%202025-01-17%20at%2012.03.38_P-8WzTkkD.jpeg?tr=w-600,h-400)`,
        }}
      >
        {played && (
          <iframe
            title="video"
            id="homevideo"
            loading="lazy"
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl object-contain"
            allow="autoplay"
            src={`https://www.youtube.com/embed/1RI4rU2wK9U?vq=hd480&rel=0&iv_load_policy=3&fs=0&color=white&controls=0&autoplay=1&iv_load_policy=3`}
          />
        )}
        <motion.img
          decoding="async" loading="lazy"          src="https://ik.imagekit.io/sheryians/CG-01/icons/play_deMruRSi3H.svg?updatedAt=1736836950829"
          className="size-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="play"
          initial={{ scale: 1, y: "-50%", x: "-50%" }}
          animate={{
            scale: played ? 1.2 : 1,
            y: "-50%",
            x: "-50%",
            opacity: played ? 0 : 1,
            pointerEvents: played ? "none" : "auto",
          }}
          transition={{ duration: 1, ease: "anticipate" }}
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;
