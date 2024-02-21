import React from "react";
import { Todos } from "../pages/Todo";
import { useTheme } from "./ThemeContext";
import SaveButton, { SaveIcon, UnsaveIcon } from "./SaveButton";
import EditButton, { EditIcon } from "./EditButton";
import DeleteButton, { DeleteIcon } from "./DeleteButton";

interface SaveAndDeleteTodoProps {
  todo: Todos;
  index: number;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const SaveAndDeleteTodo: React.FC<SaveAndDeleteTodoProps> = ({
  todo,
  index,
  setTodos,
  setEditIndex,
}) => {
  const { darkMode } = useTheme();

  const setToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, done: !prevTodo.done } : prevTodo
      )
    );
  };

  const setEdit = (index: number) => {
    setEditIndex(index);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  return (
    <li className="flex items-center justify-between py-5 gap-1 sm:gap-2 ">
      <span
        className={` text-sm sm:text-lg w-44 sm:w-60 rounded-md ring-1 ring-slate-900 dark:bg-slate-800 dark:text-slate-200 p-1 ${
          todo.done ? "line-through text-gray-700" : ""
        }`}
      >
        {todo.todo}
      </span>
      <div>
        <SaveButton
          icon={todo.done ? <UnsaveIcon /> : <SaveIcon />}
          color="#059669"
          onClick={() => setToggle(todo.id)}
        />
      </div>
      <div>
        <EditButton
          darkMode={darkMode}
          icon={<EditIcon darkMode={darkMode} />}
          onClick={() => setEdit(index)}
        />
      </div>
      <div>
        <DeleteButton
          darkMode={darkMode}
          icon={<DeleteIcon darkMode={darkMode} />}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </li>
  );
};

export default SaveAndDeleteTodo;
