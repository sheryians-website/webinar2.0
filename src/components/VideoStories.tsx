import { useState } from "react";
import Carousel from "./Common/Carousel";
import Video from "./Common/Video";

const VideoCard = ({ videoStories }: { videoStories: string[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <Carousel onIndexChange={(index) => setIndex(index)} className="bg-lavender-100 py-7">
      {videoStories.map((id, i) => <div key={i} className={`min-w-52 rounded-lg overflow-hidden relative`}><Video isPlayeble={i === index} aspectRatio={9 / 16} src={id} /></div>)}
    </Carousel>

  );
};

export default VideoCard;
