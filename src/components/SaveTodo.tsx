import React from "react";
import { Todos } from "../pages/Todo";
import SaveButton, { SaveIcon, UnsaveIcon } from "../icons/SaveButton";

interface SaveTodoProps {
  todo: Todos;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const SaveTodo: React.FC<SaveTodoProps> = ({ todo, setTodos }) => {
  const setToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, done: !prevTodo.done } : prevTodo
      )
    );
  };

  return (
    <div>
      <SaveButton
        icon={todo.done ? <UnsaveIcon /> : <SaveIcon />}
        color="#059669"
        onClick={() => setToggle(todo.id)}
      />
    </div>
  );
};

export default SaveTodo;
