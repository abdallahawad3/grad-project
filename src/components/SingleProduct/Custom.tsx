import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vid from "../../assets/video/Simple.mp4";
import { Fullscreen } from "lucide-react";

export default function CustomVideoPopup() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Track play/pause state
  const [progress, setProgress] = useState(0);

  // Toggle fullscreen modal
  const togglePopup = () => {
    const video = videoRef.current;
    if (video) {
      video.pause(); // Stop non-fullscreen video
      setIsPlaying(false); // Update play state
    }
    setIsOpen((prev) => !prev);
  };

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(() => console.log("Video play failed"));
      }
      setIsPlaying((prev) => !prev);
    }
  };

  // Sync video playback and progress
  useEffect(() => {
    const video = videoRef.current;
    const fullscreenVideo = fullscreenVideoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // Sync fullscreen video time when modal opens
    if (isOpen && fullscreenVideo) {
      fullscreenVideo.currentTime = video.currentTime;
      fullscreenVideo
        .play()
        .catch(() => console.log("Fullscreen video play failed"));
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        togglePopup();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Normal Video */}
      <div className="relative group w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-xl"
          src={vid}
          autoPlay
          loop
          playsInline
        />

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300/40">
          <div
            className="h-full bg-[#0A947C] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A947C] text-white p-6 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#0c7b67] focus:outline-none focus:ring-2 focus:ring-[#0A947C] focus:ring-opacity-50 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <span className="text-3xl">
            {isPlaying ? (
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 3l16 9-16 9V3z" />
              </svg>
            )}
          </span>
        </button>
        <button
          onClick={togglePopup}
          aria-label="Open video in fullscreen"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition bg-[#0A947C] text-white p-4 rounded-full shadow-lg transform scale-110 hover:bg-[#087764] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0A947C] focus:ring-opacity-50"
        >
          <Fullscreen />
        </button>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePopup} // Close on backdrop click
          >
            <div
              className="relative w-full max-w-6xl mx-auto px-4 h-screen flex items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={togglePopup}
                aria-label="Close fullscreen video"
                className="absolute top-4 right-4 z-50 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
              >
                ✕
              </button>

              {/* Fullscreen Video */}
              <motion.div
                className="relative bg-black rounded-xl overflow-hidden shadow-2xl w-full h-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  ref={fullscreenVideoRef}
                  className="w-full h-full object-contain"
                  src={vid}
                  controls
                  playsInline
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
