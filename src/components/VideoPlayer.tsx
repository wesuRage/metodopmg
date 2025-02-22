"use client"

import { useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  return (
    <div className="relative shadow-xl shadow-black mb-4 w-[90%] md:w-[50%] z-0 mx-auto mt-12 group border-4 border-black rounded-2xl overflow-hidden bg-black">
        <video
            ref={videoRef}
            className="w-full shadow-lg rounded-2xl"
            src={src}
            onTimeUpdate={handleTimeUpdate}
        ></video>

        {!isPlaying && (
            <button
            className="absolute inset-0 flex items-center justify-center text-[#73D673] bg-black/50 rounded-2xl hover:bg-black/70 transition-opacity"
            onClick={togglePlay}
            >
            <BsFillPlayFill size={50} className="opacity-80" />
            </button>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-800 z-0">
            <div
            className="h-full bg-[#73D673] transition-all"
            style={{ width: `${progress}%` }}
            ></div>
        </div>
        </div>

  );
}
