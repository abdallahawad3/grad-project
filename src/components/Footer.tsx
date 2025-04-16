import footerImg from "../assets/imgs/Left.png";

const Footer = () => {
  return (
    <footer
      className={`
        relative
        z-10
        py-[100px]
        bg-[#002603]
        overflow-hidden
        text-white
        `}
    >
      {/* First Clos */}
      <div
        className={`
        container    
        relative
        z-10
        grid        
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4`}
      >
        <div>
          <h2 className="text-body-md-400 md:text-body-lg-400 lg:text-body-xl-500">
            About Us
          </h2>
          <p className="text-gray-500">
            We are a team of passionate developers dedicated to creating amazing
            web applications.
          </p>
          <div>
            <span>(219) 555-0114</span> or <span>Proxy@gmail.com</span>
          </div>
        </div>
        {/* Sec Cols */}

        <FooterItem
          items={[
            "Order History",
            "Contact Us",
            "Shopping Cart",
            "Wishlist",
            "Settings",
          ]}
          title="My Account"
        />
        <FooterItem
          items={["Contact", "Faqs", "Terms & Condition", "Terms & Condition"]}
          title="Helps"
        />
        <FooterItem
          items={[
            "About",
            "Shop",
            "Product",
            "Products Details",
            "Track Order",
          ]}
          title="Proxy"
        />
      </div>
      <img
        src={footerImg}
        className="
        h-[300px]
        object-contain
        absolute
        bottom-0
        -left-7
        -z-1
        "
        alt="Footer Image"
      />
    </footer>
  );
};

export default Footer;

const FooterItem = ({ items, title }: { title: string; items: string[] }) => {
  return (
    <ul className="space-y-2">
      <li className="text-body-md-400 md:text-body-lg-400 lg:text-body-xl-500">
        {title}
      </li>
      {items.map((item, idx) => (
        <li
          className="cursor-pointer hover:text-white text-body-sm-400 text-gray-400"
          key={idx}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
