/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroImage from "../../images/Hero.png";

function Home() {
  return (
    <div className="bg-gray-50  min-h-screen">
      <div className="flex flex-col" id="home">
        <Navbar />

        <div className="pt-8 sm:pt-14 sm:gap-0 sm:flex items-center justify-evenly">
          <div className="items-center ">
            <img
              src={HeroImage}
              alt="Hero"
              className=" mx-auto  h-60 w-60 sm:h-80 sm:w-80"
            />
          </div>
          <div className="flex flex-col gap-4 sm:p-2 text-center mt-5 sm:w-80">
            <h1 className="text-slate-700 font-semibold font-sans text-2xl sm:text-4xl">
              Elevate Your Productivity with NotePad
            </h1>
            <p className="text-gray-700 font-sans text-sm sm:text-lg sm:font-normal">
              Simplify your life, one task at a time
            </p>
            <button className="mx-auto w-24 sm:w-32 h-8 rounded-lg text-white bg-emerald-600 hover:bg-blue-900 text-md duration-200 hover:scale-105">
              <Link to="/note">Try Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
