import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const MyComponent = () => {
  useEffect(() => {}, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isType, setIsType] = useState("");
  return (
    <>
      <input
        value={isType}
        onChange={(e) => setIsType(e.target.value)}
        type="text"
        name="name"
        id="name"
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      ;
    </>
  );
};

export default MyComponent;
