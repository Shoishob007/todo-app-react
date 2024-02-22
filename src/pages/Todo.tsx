import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import AddTodo from "../components/AddTodo";
import UpdateTodo from "../components/UpdateTodo";
import Navbar from "../components/Navbar";
import TodoBox from "../components/TodoBox";
import { ToggleLightTheme, ToggleDarkTheme } from "../icons/ThemeIcon";

export interface Todos {
  id: number;
  todo: string;
  done?: boolean;
}

export default function Todo() {
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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
          {editIndex == -1 ? (
            <AddTodo
              todos={todos}
              setTodos={setTodos}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
            />
          ) : (
            <UpdateTodo
              todos={todos}
              setTodos={setTodos}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
            />
          )}
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
                <TodoBox
                  key={index}
                  todo={todo}
                  index={index}
                  setTodos={setTodos}
                  setEditIndex={setEditIndex}
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
            <ToggleLightTheme fill="white" toggleDarkMode={toggleDarkMode} />
          ) : (
            <ToggleDarkTheme
              fill="currentColor"
              toggleDarkMode={toggleDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
}
