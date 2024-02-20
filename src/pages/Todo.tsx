// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoOperations from "../components/TodoOperations";
import AddUpdateTodo from "../components/AddUpdateTodo";
import { useTheme } from "../components/ThemeContext";

export interface Todos {
  id: number;
  todo: string;
  done?: boolean;
}

export default function Todo() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [editIndex, setEditIndex] = useState<number>(-1);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const addTodo = (value: string) => {
    if (value != "") {
      setTodos([...todos, { id: Math.random(), todo: value }]);
    }
  };

  const setToggle = (id: number) => {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const setEdit = (index: number) => {
    console.log(index);
    setInput(todos[index].todo);
    setEditIndex(index);
  };

  const updateTodo = (updatedValue: string) => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].todo = updatedValue;
    setTodos(updatedTodos);
    setEditIndex(-1);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    const filteredTodo = todos.filter((item) => item.id !== id);
    setTodos(filteredTodo);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setInput("");
  }, [todos]);

  return (
    <div
      className="flex flex-col min-h-screen gap-10 md:gap-8 bg-gray-50 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950"
      id="create"
    >
      <Navbar />
      <div className="mx-auto py-14 sm:py-10 flex flex-col gap-5 ">
        <p className="text-xl sm:text-2xl mx-auto sm:mx-0 font-bold underline underline-offset-4 dark:text-slate-300">
          Add Todo
        </p>
        <div className="w-full flex gap-2 sm:gap-3 ">
          <AddUpdateTodo
            input={input}
            editIndex={editIndex}
            onAddTodo={addTodo}
            onUpdateTodo={updateTodo}
          />
        </div>
      </div>
      <div className="flex flex-col mx-auto sm:w-80">
        <p className=" text-xl sm:text-2xl mx-auto sm:mx-0 font-bold underline underline-offset-4 dark:text-slate-300">
          My Todos
        </p>
        <div className="rounded w-full flex flex-col">
          <ul>
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <TodoOperations
                  key={index}
                  todo={todo}
                  index={index}
                  setToggle={setToggle}
                  setEdit={setEdit}
                  deleteTodo={deleteTodo}
                />
              ))
            ) : (
              <div className="py-5">
                <p className=" text-lg text-emerald-700 font-semibold">
                  No Todos Yet!
                </p>
              </div>
            )}
          </ul>
        </div>
        <div className="">
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="absolute bottom-8 right-8 p-2 w-10 h-10"
              onClick={toggleDarkMode}
            >
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute bottom-8 right-8 p-2 w-10 h-10"
              onClick={toggleDarkMode}
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
