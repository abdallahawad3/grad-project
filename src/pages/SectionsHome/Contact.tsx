import logo from "@/assets/imgs/Logo.png";

export default function Contact({ backgroundColor = "#EDF2EE" }) {
  return (
    <section className="py-12 " style={{ backgroundColor }}>
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 font-poppins flex flex-col md:flex-row items-center justify-between gap-6 ">
        <div className="flex-shrink-0">
          <img
            className="max-w-[100px] md:max-w-[150px]"
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="text-center md:text-left px-4">
          <h2 className="text-[24px]  md:text-2xl font-medium text-[#002603] mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[#7A997C] text-[14px] font-normal md:text-base">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </p>
        </div>

        <div className="flex w-full md:w-auto">
          <div className="relative flex-1  flex max-w-[400px] w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[491px] px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B207] focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full bg-[#00B207] hover:bg-[#008000] text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 transition duration-300 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
