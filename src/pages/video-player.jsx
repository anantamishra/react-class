import React, { useRef } from "react";

export const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">React Video Player</h2>
      <video
        ref={videoRef}
        className="w-full max-w-2xl rounded-lg mb-4"
        autoPlay
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex gap-2">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Play
        </button>
        <button
          onClick={handlePause}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md"
        >
          Pause
        </button>
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md"
        >
          Restart
        </button>
        <button
          onClick={handleBackward}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md"
        >
          -10s
        </button>
        <button
          onClick={handleForward}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md"
        >
          +10s
        </button>
      </div>
    </div>
  );
};
