import React, { useState, useEffect } from "react";

interface AddUpdateTodoProps {
  onAddTodo: (todo: string) => void;
  onUpdateTodo: (updatedValue: string) => void;
  editIndex: number;
  input: string;
}

const AddUpdateTodo: React.FC<AddUpdateTodoProps> = ({
  onAddTodo,
  onUpdateTodo,
  editIndex,
  input,
}) => {

  const [value, setValue] = useState<string>(input);


  useEffect(() => {
    setValue(input);
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (editIndex === -1) {
      onAddTodo(value);
      
    } else {
      onUpdateTodo(value);
    }
  };

  return (
    <div className="w-full flex gap-2 sm:gap-3">
      <input
        className="w-52 sm:w-72 placeholder:italic placeholder:text-slate-400 ring-1 rounded-md p-1 sm:p-2 pr-2 shadow-sm focus:outline-blue-800 ring-slate-700 focus:ring-blue-900 text-sm sm:text-lg"
        placeholder="Add a new todo..."
        required
        type="text"
        name="search"
        value={value}
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
          className="sm:w-8 sm:h-8 w-6 h-6 hover:text-blue-800 hover:scale-105 duration-150"
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
