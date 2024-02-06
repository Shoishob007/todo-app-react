// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (input != "") {
      setTodos([...todos, { id: Math.random(), todo: input }]);
      setInput("");
    }
  };

  const setToggle = (id) => {
    console.log(id);
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const setEdit = (index) => {
    console.log(index);
    setInput(todos[index].todo);
    setEditIndex(index);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].todo = input;
    setTodos(updatedTodos);
    setEditIndex(-1);
    setInput("");
  };

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((item) => item.id !== id);
    setTodos(filteredTodo);
    setInput("");
  };
  return (
    <div className="flex flex-col min-h-screen" id="create">
      <Navbar />
      <div className="mx-auto py-10 flex flex-col gap-5 ">
        <p className="text-xl sm:text-2xl mx-auto sm:mx-0 font-bold underline underline-offset-4">
          Add Todo
        </p>
        <div className="w-full flex gap-1 sm:gap-2">
          <input
            className=" sm:w-72 placeholder:italic placeholder:text-slate-400 ring-1 rounded-md p-1 sm:p-2 pr-2 shadow-sm focus:outline-blue-800 ring-slate-700 focus:ring-blue-900 text-sm sm:text-l"
            placeholder="Add a new todo..."
            required
            type="text"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="flex items-center rounded-full"
            onClick={editIndex === -1 ? addTodo : updateTodo}
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
      </div>
      <div className="flex flex-col mx-auto  sm:w-80">
        <p className=" text-xl sm:text-2xl mx-auto sm:mx-0 font-bold underline underline-offset-4">
          My Todos
        </p>
        <div className="rounded w-full flex flex-col">
          <ul>
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-5 gap-1 sm:gap-2"
                >
                  <span
                    className={` text-sm sm:text-lg w-44 sm:w-60 rounded-md ring-1 ring-slate-900 p-1 ${
                      todo.done ? "line-through text-gray-700" : ""
                    }`}
                  >
                    {todo.todo}
                  </span>
                  <div>
                    {todo.done ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgb(55 65 81)"
                        className="h-5 w-5 sm:w-6 sm:h-6 hover:text-blue-800 hover:scale-105 duration-150"
                        onClick={() => setToggle(todo.id)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => setToggle(todo.id)}
                        className={
                          " h-5 w-5 sm:w-6 sm:h-6 hover:text-blue-800 hover:scale-105 duration-150"
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 sm:w-6 sm:h-6 hover:text-blue-800 hover:scale-105 duration-150"
                      onClick={() => setEdit(index)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 sm:w-6 sm:h-6 hover:text-red-700 hover:scale-105 duration-150"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </li>
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
      </div>
    </div>
  );
}
