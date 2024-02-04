/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-gray-50 ">
      <div className="flex flex-col min-h-screen" id="home">
        <Navbar />

        <div className="flex-1 grid content-center grid-flow-col grid-cols-2">
          <div className="flex flex-col gap-4 p-10 text-center my-auto">
            <h1 className=" text-slate-700 font-semibold font-sans text-4xl">
              Elevate Your Productivity with NotePad
            </h1>
            <p className="text-gray-700 font-sans font-normal ">
              Simplify your life, one task at a time
            </p>
            <button className="mx-auto w-32 h-8 rounded-lg text-white bg-emerald-600 hover:bg-blue-900 text-md duration-200 hover:scale-105">
              <Link to="/note">Try Now</Link>
            </button>
          </div>
          <div className="">
            <img
              src="./images/Hero.png"
              alt="Hero"
              className="ml-24 h-72 w-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
