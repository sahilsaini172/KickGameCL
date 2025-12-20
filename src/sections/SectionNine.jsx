"use client"; // Add if using Next.js App Router

import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import PrimaryButton from "../components/PrimaryButton";

const sectionNine = [
  {
    url: "/s91.png",
    title: "ishowspeed",
  },
  {
    url: "/s92.png",
    title: "arrdee",
  },
  {
    url: "/s93.png",
    title: "chunkz",
  },
  {
    url: "/s94.png",
    title: "latto",
  },
  {
    url: "/s95.png",
    title: "leon bailey",
  },
  {
    url: "/s96.png",
    title: "davido",
  },
];

export default function SectionNine({ screenWidth }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <section className="flex flex-col bg-surface p-4 md:p-0">
      <div className="justify-between flex items-center h-fit md:py-2">
        <div className="flex flex-col md:px-4 md:pt-4 lg:pt-8 lg:px-8 xl:px-12">
          <h2 className="uppercase text-xl font-bold tracking-wide mb-1">
            Central Cee
          </h2>
          <p className="text-sm">
            Central Cee Goes Shopping for Sneakers at Kick Game
          </p>
        </div>
        {screenWidth > 776 && (
          <PrimaryButton
            varient="black"
            className={"mt-2 w-full md:w-fit md:mr-4 lg:mr-8 xl:mr-12"}
            label="view more"
          />
        )}
      </div>

      <div className="mt-4 group cursor-pointer" onClick={handleVideoClick}>
        <div className="relative">
          <video
            ref={videoRef}
            className="rounded-md object-center md:rounded-none relative w-full aspect-video lg:aspect-28/9 object-cover"
            muted
            poster="/s9.png"
            aria-label="Central Cee Goes Shopping for Sneakers at Kick Game"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/s9.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
          <button
            onClick={togglePlay}
            className="pointer-events-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black/10 backdrop-blur-md hover:bg-black/25 rounded-full p-3 transition-all duration-300 opacity-100 group-hover:opacity-100 text-white"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause fill="#ffffff" /> : <Play fill="#ffffff" />}
          </button>
        </div>
        {screenWidth < 776 && (
          <PrimaryButton
            varient="black"
            className={"mt-2 w-full"}
            label="view more"
          />
        )}
      </div>
      <div className="flex gap-2 mt-3 overflow-x-scroll md:px-4 md:pb-4 lg:justify-between lg:px-8 lg:pb-8 xl:px-12 xl:pb-12">
        {sectionNine.map((item, idx) => (
          <div
            key={idx}
            className="flex relative overflow-hidden rounded-md shrink-0"
          >
            <img
              src={item.url}
              className="aspect-square object-cover rounded-md w-45 lg:w-60"
            />
            <p className="uppercase w-full m-2 absolute text-sm font-bold text-white bottom-0 left-0 z-10">
              {item.title}
            </p>
            <div className="flex  rounded-md z-9 aspect-square h-full absolute bg-linear-to-t from-black/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
