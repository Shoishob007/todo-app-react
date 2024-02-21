/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroImage from "../assets/Todo.svg";
import { useTheme } from "../components/ThemeContext";
import { ToggleLightTheme, ToggleDarkTheme } from "../components/ThemeIcon";
import { useEffect } from "react";

function Home() {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="flex flex-col" id="home">
        <Navbar />

        <div className="pt-10 sm:pt-14 gap-10 sm:gap-5 flex flex-col lg:flex-row items-center justify-evenly">
          <div className="items-center ">
            <img
              src={HeroImage}
              alt="Hero"
              className=" mx-auto h-96 w-80 md:w-96  "
            />
          </div>
          <div className="flex flex-col gap-7 sm:gap-5 sm:p-2 text-center items-center my-5 mx-16 lg:mx-0 md:w-96 md:h-96 ">
            <h1 className="text-slate-700 dark:text-slate-300 font-semibold font-sans text-2xl sm:text-4xl">
              Elevate Your Productivity with NotePad
            </h1>
            <p className="text-gray-700 dark:text-slate-300 font-sans text-lg sm:font-normal">
              Simplify your life, one task at a time
            </p>
            <button className="mx-auto w-24 sm:w-32 h-8 rounded-lg text-white bg-emerald-600 dark:bg-teal-800 hover:bg-blue-900 dark:hover:bg-blue-900 text-md duration-200 hover:scale-105">
              <Link to="/note">Try Now</Link>
            </button>
          </div>
        </div>
        <div className="">
          {darkMode ? (
            <ToggleLightTheme fill="white" toggleDarkMode={toggleDarkMode} />
          ) : (
            <ToggleDarkTheme
              fill="currentColor"
              toggleDarkMode={toggleDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
