import Card1 from "../../images/farmer4.png";
import Card2 from "../../images/farmer5.png";
import Card3 from "../../images/farmer6.png";
import Card4 from "../../images/farmer7.png";

const teams = [
  {
    img: Card1,
    title: "Fresh Vegetables",
    description: "Naturally grown and handpicked",
  },
  {
    img: Card2,
    title: "Organic Fruits",
    description: "No chemicals, pure taste",
  },
  {
    img: Card3,
    title: "Dairy Products",
    description: "From local trusted farms",
  },
  {
    img: Card4,
    title: "Herbs & Spices",
    description: "Aromatic and flavorful",
  },
];

export default function Team() {
  return (
    <section className="py-12 bg-[#F9FBF9] font-poppins">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[48px] md:text-4xl font-bold text-[#1A1A1A] mb-4">
          Our Awesome Team
        </h1>
        <p className="text-[#666666] text-[16px] md:text-base max-w-xl mx-auto mb-10">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teams.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-[#002603] mb-1">
                {item.title}
              </h3>
              <span className="text-sm text-[#7A997C]">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
