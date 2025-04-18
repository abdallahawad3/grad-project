import Farmer1 from "../../images/Farmer1.png";
export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-poppins">
      <div className=" px-4 md:px-6 mx-auto">
        <div className="grid container grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-[56px]/[1.2] md:text-5xl ont-semibold tracking-tight text-gray-900">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-lg text-gray-600 max-w-[600px]">
              Fresh organic foods directly delivered to your doorstep. We source
              from local farmers who take utmost care of produce. Shop with
              confidence knowing that our products are certified organic and
              sustainably grown, to ensure you get the freshest and highest
              quality food.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={Farmer1}
              alt="Farmer with fresh produce"
              className="rounded-lg object-cover max-h-[400px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
