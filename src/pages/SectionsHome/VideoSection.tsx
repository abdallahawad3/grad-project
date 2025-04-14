import { PlayCircle } from "lucide-react";
import VideoImage from "../../images/Video.png";
export default function VideoSection() {
  return (
    <section className="relative  h-[740px] flex items-center justify-center text-white font-poppins px-4 py-20 sm:py-24">
      <div
        className="container bg-cover  bg-no-repeat absolute inset-0 bg-black/50 z-0"
        style={{ backgroundImage: `url(${VideoImage})` }}
      />

      <div className="relative z-10 text-center w-[445px]">
        <p className="  font-segoe text-[#FFFFFF] uppercase tracking-wide text-[16px] mb-2">
          Video
        </p>
        <h1 className="text-[36px] sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          We’re the Best Organic Farm in the World
        </h1>

        <button
          className="mx-auto w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full hover:bg-white/90 transition duration-300"
          aria-label="Play Video"
        >
          <PlayCircle className="w-10 h-10 text-[#00B207]" />
        </button>
      </div>
    </section>
  );
}
