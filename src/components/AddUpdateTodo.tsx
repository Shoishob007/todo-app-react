import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Todos } from "../pages/Todo";

interface AddUpdateTodoProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  editIndex: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AddUpdateTodo: React.FC<AddUpdateTodoProps> = ({
  todos,
  setTodos,
  editIndex,
  setEditIndex,
}) => {
  const [input, setInput] = useState<string>("");
  const { darkMode } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (editIndex === -1) {
      if (input.trim() !== "") {
        setTodos([
          ...todos,
          { id: Math.random(), todo: input.trim(), done: false },
        ]);
        setInput("");
      }
    } else {
      if (input.trim() !== "") {
        const updatedTodos = [...todos];
        updatedTodos[editIndex].todo = input.trim();
        setTodos(updatedTodos);
        setEditIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    if (editIndex !== -1) {
      setInput(todos[editIndex].todo);
    } else {
      setInput("");
    }
  }, [editIndex, todos]);

  return (
    <div className="w-full flex gap-2 sm:gap-3">
      <input
        className="w-52 sm:w-72 placeholder:italic placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:bg-slate-800 ring-1 rounded-md p-1 sm:p-2 pr-2 shadow-sm focus:outline-blue-800 ring-slate-700 dark:focus:outline-blue-400 text-sm dark:text-slate-200 sm:text-lg"
        placeholder="Add a new todo..."
        required
        type="text"
        name="search"
        value={input}
        onChange={handleChange}
      />
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
    </div>
  );
};

export default AddUpdateTodo;
