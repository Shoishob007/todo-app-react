import React, { useState, useEffect } from "react";
import { Todos } from "../pages/Todo";
import { AddUpdateTodoButton } from "../icons/AddUpdateTodoButton";

interface AddUpdateTodoProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  editIndex: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

const UpdateTodo: React.FC<AddUpdateTodoProps> = ({
  todos,
  setTodos,
  editIndex,
  setEditIndex,
}) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (input.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].todo = input.trim();
      setTodos(updatedTodos);
      setEditIndex(-1);
      setInput("");
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
      <AddUpdateTodoButton handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default UpdateTodo;
