import { Link } from "react-router-dom";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.data?.role;

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div>Home Link</div>

      {!role ? (
        <Link to={"/login"}>Login</Link>
      ) : role === "user" ? (
        <>User Role</>
      ) : (
        <>Admin Role</>
      )}
    </div>
  );
};

export default Nav;
