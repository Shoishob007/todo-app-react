// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav className=" bg-gradient-to-r from-emerald-100 to-emerald-100 via-gray-50 flex sticky justify-around gap-20 rounded-md mx-auto my-10 p-2 text-center max-w-screen-lg h-15 ring-1 ring-gray-900 shadow-md">
        <section
          className="my-auto text-center cursor-pointer hover:scale-105 duration-200"
          onClick={() => navigate("/")}
        >
          <img className="max-h-16 w-16 " src="./images/Logo.png" alt="Logo" />
        </section>
        <ul className="my-auto flex justify-between gap-6 cursor-pointer text-gray-800 font-bold shadow-sm">
          <li className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100">
            <Link to="/todo">Create Todo</Link>
          </li>
          <li className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100">
            <Link to="/note">Create Note</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
