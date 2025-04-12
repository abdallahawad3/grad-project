import { Link } from "react-router-dom";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.data?.role;

  return (
    <header className="flex justify-between items-center bg-gray-800  p-4 h-[43px] font-poppins text-[#B3B3B3] text-[12px]">
      {!role ? (
        <Link to={"/login"}>Sign In</Link>
      ) : role === "user" ? (
        <>User Role</>
      ) : (
        <>Admin Role</>
      )}
    </header>
  );
};

export default Nav;
