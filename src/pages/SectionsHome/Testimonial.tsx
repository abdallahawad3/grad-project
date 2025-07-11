/* eslint-disable @typescript-eslint/no-explicit-any */
import Person1 from "../../images/person1.png";
import Person2 from "../../images/person2.png";
import Person3 from "../../images/person3.png";
import Quote from "../../images/Quote.png";
import useFetchAllReviews from "@/api/products/useGetAllRev";

export default function Testimonial() {
  const { data } = useFetchAllReviews();
  const persons = data?.data.map((item: any, idx: number) => {
    return {
      img: idx === 0 ? Person1 : idx === 1 ? Person2 : Person3,
      name: item.user.name,
      review: item.review,
    };
  });

  return (
    <section className="py-12 px-4 bg-[#EDF2EE] font-poppins">
      <div className="container mx-auto text-center">
        <h1 className="text-[40px] font-semibold mb-12">
          What our Clients Says
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {persons?.slice(0, 3).map((person: any, index: any) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative  bg-[#fff] p-6 rounded-lg text-center">
                <div className="mb-4 flex justify-center">
                  <img src={Quote} alt="Quote Icon" className="w-[40px]" />
                </div>

                <p className="text-[#406B42] text-[16px] font-normal">
                  “{person.review}”
                </p>

                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#fff] absolute left-1/2 transform -translate-x-1/2 bottom-[-8px]"></div>
              </div>

              <div className="mt-8 flex flex-col items-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover mb-2"
                />
                <p className="font-medium text-[16px]">{person.name}</p>
                <span className="text-[14px] font-normal text-[#618062]">
                  Customer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
