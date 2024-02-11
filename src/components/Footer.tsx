import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r p-2 from-blue-950 to-blue-950 via-indigo-950">
      <div className=" mx-6 sm:mx-36 flex flex-row items-center justify-center gap-3 text-center border-b-2 p-1">
        <p className=" text-gray-200 text-lg hidden sm:block">Contact Us </p>
        <a
          href="https://www.linkedin.com/in/shoishob-ahmed-34672a212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className=" hover:scale-110 duration-150"
            style={{
              height: "16px",
              width: "16px",
            }}
            color="#FFFFFF"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/shoishob-ahmed-34672a212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            className=" hover:scale-110"
            style={{
              height: "16px",
              width: "16px",
            }}
            color="#FFFFFF"
          />
        </a>
      </div>
      <div className=" items-center mx-8 sm:mx-40 sm:p-2">
        <p className="text-xs text-center text-gray-200">
          © 2023 www.todo-note-react.com | Powered by: Shoishob-49 | Copyright:
          Any unauthorized use or reproduction of Todo-React content for
          commercial purposes is strictly prohibited and constitutes copyright
          infringement liable to legal action.
        </p>
      </div>
    </div>
  );
};

export default Footer;
