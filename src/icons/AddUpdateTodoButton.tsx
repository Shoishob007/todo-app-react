import { useTheme } from "../context/ThemeContext";

interface AddUpdateTodoButtonProps {
  handleButtonClick: () => void;
}

export const AddUpdateTodoButton: React.FC<AddUpdateTodoButtonProps> = ({
  handleButtonClick,
}) => {
  const { darkMode } = useTheme();

  return (
    <>
      <button
        className="flex items-center rounded-full"
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className={`sm:w-8 sm:h-8 w-6 h-6 hover:text-blue-800 hover:scale-105 duration-150 ${
            darkMode ? "text-slate-400" : "text-black"
          }`}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </>
  );
};
