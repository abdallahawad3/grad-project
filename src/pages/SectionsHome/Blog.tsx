import { ArrowRight } from "lucide-react";
import Blog1 from "../../images/Blog1.png";
import Blog2 from "../../images/Blog2.png";
import Blog3 from "../../images/Blog3.png";

const newsData = [
  {
    id: 1,
    image: Blog1,
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    description:
      "Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.",
  },
  {
    id: 2,
    image: Blog2,
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    id: 3,
    image: Blog3,
    title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Blog() {
  return (
    <section className="py-12  border-[1px] border-[#B4CCB4]  bg-[#EDF2EE] font-poppins">
      <div className="container mx-auto px-4 text-left">
        <h1 className="text-[40px] text-center md:text-4xl font-semibold mb-12">
          Latest News
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white w-full max-w-[424px] mx-auto rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={news.image}
                  alt={news.title}
                  className="rounded-md w-full h-[240px] object-cover"
                />
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-[18px] text-[#002603] font-medium mb-2">
                  {news.title}
                </h3>
                <p className="text-[#618062] font-normal text-[14px] mb-4">
                  {news.description}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[#00B207] hover:text-[#008000] font-medium pt-2 transition duration-300"
                >
                  Read More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
