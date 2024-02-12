/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroImage from "../../images/Todo.svg";
import { useTheme } from "./ThemeContext";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="absolute bottom-8 right-8 p-2 w-10 h-10"
              onClick={toggleDarkMode}
            >
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute bottom-8 right-8 p-2 w-10 h-10"
              onClick={toggleDarkMode}
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
