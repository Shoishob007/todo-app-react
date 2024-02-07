// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Note() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [editIndex, setEditIndex] = useState(-1);

  const addNote = () => {
    if (title != "" && description != "") {
      setNotes([
        ...notes,
        { id: Date.now(), title: title, description: description },
      ]);
      setTitle("");
      setDescription("");
    }
  };

  const editNote = (index) => {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditIndex(index);
  };

  const updateNote = () => {
    const updatedNotes = [...notes];
    updatedNotes[editIndex].title = title;
    updatedNotes[editIndex].description = description;
    setNotes(updatedNotes);
    setEditIndex(-1);
    setTitle("");
    setDescription("");
  };

  const toggleNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((item) => item.id !== id);
    setNotes(filteredNotes);
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <p className="pb-4 text-xl sm:text-2xl mx-auto font-bold underline underline-offset-4">
        Add Your Note
      </p>
      <div className="inputBox border border-blue-950 rounded-lg h-44 mx-auto flex flex-col shadow-xl justify-evenly w-64 sm:w-96">
        <input
          type="text"
          className="p-2 border-b-2 border-b-emerald-300 border-dashed outline-none placeholder:font-semibold placeholder:italic placeholder:text-slate-400 "
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-2 placeholder:font-medium h-20 resize-none outline-none placeholder:italic placeholder:text-slate-400"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {editIndex === -1 ? (
          <button
            className=" w-20 sm:w-24 h-8 rounded-lg text-white bg-emerald-600 hover:scale-105 hover:bg-blue-900 duration-200 font-normal sm:font-md mx-auto "
            onClick={addNote}
          >
            Save
          </button>
        ) : (
          <button
            className=" w-20 sm:w-24 h-8 rounded-lg text-white bg-emerald-600 hover:scale-105 hover:bg-blue-900 duration-200 font-normal sm:font-md mx-auto "
            onClick={updateNote}
          >
            Save Edits
          </button>
        )}
      </div>
      <div className="flex flex-col font-medium p-2 sm:p-4">
        <p className="py-2 text-xl sm:text-2xl mx-auto  font-bold underline underline-offset-4">
          My Notes
        </p>
        <div className="py-4 px-6 mx-auto">
          <ul className=" flex flex-wrap justify-center items-center gap-8">
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <li key={index}>
                  <div
                    className={`h-40 w-64 border-2 border-gray-900 flex flex-col rounded-md `}
                  >
                    <span
                      className={`flex justify-between text-center rounded-md overflow-hidden p-2 border-b-emerald-400 border-b ${
                        note.done ? "bg-emerald-100" : ""
                      }`}
                    >
                      <p className="text-slate-600 sm:text-base">
                        {note.title}
                      </p>
                      {note.done ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="rgb(42, 170, 138)"
                          className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-900 hover:scale-105 duration-150"
                          onClick={() => toggleNote(note.id)}
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
                          className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-800 hover:scale-105 duration-150"
                          onClick={() => toggleNote(note.id)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="flex-grow p-2 ">
                      <p className="text-slate-600 text-start sm:text-base">
                        {note.description}
                      </p>
                    </span>
                    <span className="flex justify-between text-start overflow-hidden gap-4 p-2">
                      <p className="text-slate-600 text-sm flex-grow">
                        {new Date(note.id).toLocaleDateString("en-GB")}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5 hover:text-blue-800 hover:scale-105 duration-150"
                        onClick={() => editNote(index)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5 hover:text-red-700 hover:scale-105 duration-150"
                        onClick={() => deleteNote(note.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <div className="mx-auto">
                <p className="text-lg text-emerald-700 font-medium sm:font-semibold">
                  No Notes Yet!
                </p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
