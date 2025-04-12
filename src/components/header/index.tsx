import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <header className="">
      <TopNav />
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};

export default Navbar;
