// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoOperations from "../components/TodoOperations";
import AddUpdateTodo from "../components/AddUpdateTodo";

export interface Todos{
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

  const addTodo = (value : string) => {
    if (value != "") {
      setTodos([...todos, { id: Math.random(), todo: value }]);
      console.log(todos); 
      setInput("");
    }
  };

  const setToggle = (id : number) => {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const setEdit = (index : number) => {
    console.log(index);
    setInput(todos[index].todo);
    setEditIndex(index);
  };

  const updateTodo = ( updatedValue: string) => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].todo = updatedValue;
    setTodos(updatedTodos);
    setEditIndex(-1);
    setInput("");
  };

  const deleteTodo = (id : number) => {
    const filteredTodo = todos.filter((item) => item.id !== id);
    setTodos(filteredTodo);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col min-h-screen gap-10 md:gap-8" id="create">
      <Navbar />
      <div className="mx-auto py-14 sm:py-10 flex flex-col gap-5 ">
        <p className="text-xl sm:text-2xl mx-auto sm:mx-0 font-bold underline underline-offset-4">
          Add Todo
        </p>
        <div className="w-full flex gap-2 sm:gap-3">
          <AddUpdateTodo
          input={input}
          editIndex={editIndex}
          onAddTodo={addTodo}
          onUpdateTodo={updateTodo}
        />
        </div>
      </div>
      <div className="flex flex-col mx-auto sm:w-80">
        <p className=" text-xl sm:text-2xl mx-auto sm:mx-0 font-bold underline underline-offset-4">
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
      </div>
    </div>
  );
}
