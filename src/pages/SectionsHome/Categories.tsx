import useGetAllCategories from "@/api/categories/useGetAllCategories";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data } = useGetAllCategories();
  return (
    <div>
      <section className="p-4 mx-auto font-poppins">
        <div className="container relative">
          <div className=" flex items-center justify-between">
            <h3 className="text-[20px] font-semibold">Popular Categories</h3>
            <Link
              to={"/products"}
              className="text-success-500 flex items-center justify-center mt-2"
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

export default Categories;
