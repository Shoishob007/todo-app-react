// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../images/Logo.svg";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav className=" bg-gradient-to-r from-emerald-100 to-emerald-100 via-gray-50 flex sticky justify-around gap-3 sm:gap-20 rounded-md mx-auto my-5 sm:my-5  p-2 text-center max-w-screen-lg h-15 ring-1 ring-gray-900 shadow-md overflow-hidden">
        <section
          className="my-auto text-center cursor-pointer hover:scale-105 duration-200"
          onClick={() => navigate("/")}
        >
          <img className="max-h-16 w-16 " src={logoImage} alt="Logo" />
        </section>
        <ul className="my-auto items-center flex justify-between gap-2 sm:gap-6 cursor-pointer text-gray-800 font-bold shadow-sm">
          <li className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100">
            <Link to="/todo">Todo</Link>
          </li>
          <li className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100">
            <Link to="/note">Note</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
