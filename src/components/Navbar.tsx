// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/Logo.svg";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import { navTitles } from "./NavItems";

function Navbar() {
  const { darkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const navigate = useNavigate();
  return (
    <div className="">
      <nav className=" bg-gradient-to-r from-emerald-100 to-emerald-100 via-gray-50 dark:from-teal-950 dark:to-teal-950 dark:via-teal-900 flex sticky justify-around gap-3 sm:gap-20 rounded-md mx-auto my-5 sm:my-5  p-2 text-center max-w-screen-lg h-15 ring-1 ring-gray-900 shadow-md overflow-hidden">
        <section
          className="my-auto text-center cursor-pointer hover:scale-105 duration-200"
          onClick={() => navigate("/")}
        >
          <img className="max-h-16 w-16 " src={logoImage} alt="Logo" />
        </section>
        <ul className="my-auto items-center flex justify-between gap-2 sm:gap-6 cursor-pointer text-gray-800 dark:text-gray-200 font-bold shadow-sm">
          {navTitles.map(({ title, link }) => (
            <li
              key={link}
              className="hover:scale-105 hover:text-bold hover:text-blue-900 dark:hover:text-emerald-600 duration-100"
            >
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
