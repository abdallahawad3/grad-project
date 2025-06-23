import useGetBrands from "@/api/brands/useGetBrands";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Brands = () => {
  const { data } = useGetBrands();
  return (
    <div>
      <section className="bg-[#EDF2EE] py-8 mx-auto font-poppins">
        <div className="container relative">
          <div className=" flex items-center justify-between">
            <h3 className="text-[20px] font-semibold">Popular Brands</h3>
            <Link
              to={"/products"}
              className="text-success-500 flex items-center justify-center"
            >
              View All <ArrowRight />{" "}
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {data?.data.map((category) => (
              <div
                key={category._id}
                className="p-4 border rounded-lg hover:border-success-200 hover:shadow-product transition-all"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[150px] object-contain mb-4 rounded"
                />
                <h2 className="text-xl text-center">{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
