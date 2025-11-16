"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    // Set playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }

    // Hide video after 18 seconds
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 18000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-screen h-screen flex transition-colors duration-500 ${
        showVideo ? "justify-center items-center bg-black" : "bg-white"
      }`}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          src="/loading.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="w-6/12 h-6/12 object-cover"
        />
      ) : (
        <div className="flex-col w-full text-black mx-4 mt-14">
          <h1 className=" text-center text-[45px]">Way to a web</h1>
          <h2 className="text-end text-3xl">loading...</h2>

          <p className="text-[12px] leading-relaxed mt-8 text-end">
            There are many different types of spider silk
            <br />
            depending on the species of spider and how
            <br />
            it hunts for prey. using stacked transparent
            <br />
            plastic sheets to simulate movement.
          </p>

          <div className="flex space-y-16 mt-20 justify-center items-center flex-col">
            <p className="text-base md:text-lg max-w-xl leading-relaxed">
              The story of how a round
              <br />
              spider web is created is
              <br />
              brought to life through
              <br />
              animation, using stacked
              <br />
              transparent plastic sheets
              <br />
              to simulate movement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
