import React from "react";
import { Todos } from "../pages/Todo";
import { useTheme } from "../context/ThemeContext";
import DeleteButton, { DeleteIcon } from "../icons/DeleteButton";

interface DeleteTodoProps {
  todo: Todos;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({ todo, setTodos }) => {
  const { darkMode } = useTheme();

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  return (
    <>
      <DeleteButton
        darkMode={darkMode}
        icon={<DeleteIcon darkMode={darkMode} />}
        onClick={() => deleteTodo(todo.id)}
      />
    </>
  );
};

export default DeleteTodo;
