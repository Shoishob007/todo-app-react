import React from "react";
import { Notes } from "../pages/Note";
import { useTheme } from "./ThemeContext";

interface NoteOperations {
  note: Notes;
  index: number;
  toggleNote: (id: number) => void;
  editNote: (index: number) => void;
  deleteNote: (id: number) => void;
}

const NoteOperations: React.FC<NoteOperations> = ({
  note,
  index,
  toggleNote,
  editNote,
  deleteNote,
}) => {
  const { darkMode } = useTheme();

  return (
    <li key={index}>
      <div
        className={`h-36 sm:h-40 w-48 sm:w-64 border-2 border-gray-900 flex flex-col rounded-md`}
      >
        <span
          className={`flex justify-between text-center rounded-md overflow-hidden p-2 border-b-emerald-400 dark:border-b-emerald-600 border-b ${
            darkMode && note.done
              ? "bg-teal-700"
              : !darkMode && note.done
              ? "bg-emerald-200"
              : ""
          }`}
        >
          <p className="text-slate-600 sm:text-base dark:text-slate-300">
            {note.title}
          </p>
          {note.done ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgb(18, 95, 75)"
              className={`sm:w-6 sm:h-6 w-5 h-5 hover:text-blue-800 hover:scale-105 duration-150 ${
                darkMode ? "text-slate-400" : "text-black"
              }`}
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
              className={`sm:w-6 sm:h-6 w-5 h-5 hover:text-blue-800 hover:scale-105 duration-150 ${
                darkMode ? "text-slate-400" : "text-black"
              }`}
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
        <span className="flex-grow p-2 overflow-hidden">
          <p className="text-slate-600 text-start sm:text-base dark:text-slate-300">
            {note.description}
          </p>
        </span>
        <span className="flex justify-between text-start gap-4 p-2">
          <div className="flex flex-col">
            <p className="text-slate-600 dark:text-slate-400 text-[10px] flex-grow">
              Added: {new Date(note.id).toLocaleDateString("en-GB")}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[10px] flex-grow">
              Edited: {note.editDate}
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`sm:w-5 sm:h-5 w-4 h-4 hover:text-blue-800 hover:scale-105 duration-150 ${
                darkMode ? "text-slate-400" : "text-black"
              }`}
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
              className={`sm:w-5 sm:h-5 w-4 h-4 hover:text-red-700 hover:scale-105 duration-150 ${
                darkMode ? "text-slate-400" : "text-black"
              }`}
              onClick={() => deleteNote(note.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </span>
      </div>
    </li>
  );
};

export default NoteOperations;
