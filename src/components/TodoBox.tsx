import React from "react";
import { Todos } from "../pages/Todo";
import SaveTodo from "./SaveTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

interface TodoBoxProps {
  todo: Todos;
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoBox: React.FC<TodoBoxProps> = ({
  todo,
  index,
  setTodos,
  setEditIndex,
}) => {
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
        <SaveTodo todo={todo} setTodos={setTodos} />
      </div>
      <div>
        <EditTodo index={index} setEditIndex={setEditIndex} />
      </div>
      <div>
        <DeleteTodo todo={todo} setTodos={setTodos} />
      </div>
    </li>
  );
};

export default TodoBox;
