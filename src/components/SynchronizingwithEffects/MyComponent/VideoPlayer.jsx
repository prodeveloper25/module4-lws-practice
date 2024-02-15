import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      console.log("play");
      ref.current.play();
    } else {
      ref.current.pause();
      console.log("pause");
    }
  }, [isPlaying]);
  return <video src={src} ref={ref} loop playsInline />;
}
