/* eslint-disable react/no-unknown-property */
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input != "") {
      setTodos([...todos, { id: Math.random(), todo: input }]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-50 ">
      <div className="flex flex-col min-h-screen" id="home">
        <div className="">
          <nav className=" bg-gradient-to-r from-emerald-100 to-emerald-100 via-gray-50 flex sticky justify-around gap-20 rounded-md mx-auto my-5 p-2 text-center max-w-screen-md h-15 ring-1 ring-gray-900 shadow-sm">
            <section className="my-auto text-center ">
              <img
                className="max-h-16 w-16 hover:scale-105 duration-200"
                src="./images/Logo.png"
                alt="Logo"
              />
            </section>
            <ul className="my-auto flex justify-between gap-6 cursor-pointer text-gray-800 font-bold shadow-sm">
              <li
                className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100"
                href="#home"
              >
                Home
              </li>
              <li
                className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100"
                href="#create"
              >
                Create Todo
              </li>
              <li
                className="hover:scale-105 hover:text-bold hover:text-blue-900 duration-100"
                href="#view"
              >
                View Todo
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 grid content-center grid-flow-col grid-cols-2">
          <div className="flex flex-col gap-4 p-10 text-center my-auto">
            <h1 className=" text-slate-700 font-semibold font-sans text-4xl">
              Elevate Your Productivity with NotePad
            </h1>
            <p className="text-gray-700 font-sans font-normal ">
              Simplify your life, one task at a time
            </p>
            <button className="mx-auto w-32 h-8 rounded-lg text-white bg-emerald-600 hover:bg-blue-900 text-md duration-200 hover:scale-105">
              Try Now
            </button>
          </div>
          <div className="">
            <img
              src="./images/Hero.png"
              alt="Hero"
              className="m-auto h-72 w-72"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col " id="create">
        <div className="mx-auto py-14 flex gap-5 ">
          <div className="w-full">
            <input
              className=" w-72 placeholder:italic placeholder:text-slate-400 block bg-transparent border-2 rounded-md py-2 px-2 pr-2 shadow-sm focus:outline-none border-slate-700 focus:ring-blue-900 focus:ring-1 sm:text-sm"
              placeholder="Add a new todo..."
              type="text"
              name="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="text-center my-auto">
            <button
              class="flex items-center hover:text-blue-900 hover:scale-105 rounded-full"
              onClick={addTodo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="rgb(51 65 85)"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        {todos.length > 0 && (
          <div className="flex flex-col left-0 mx-auto w-80">
            <h1 className="text-3xl underline underline-offset-4">My Todos</h1>
            <div className="rounded w-full flex flex-col">
              <ul>
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-5 gap-2"
                  >
                    <span className="text-lg w-52 rounded-md ring-2 ring-slate-900 p-1">
                      {todo.todo}
                    </span>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
                        className="w-6 h-6"
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
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
