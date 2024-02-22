import React from "react";
import { Notes } from "../pages/Note";
import { useTheme } from "../context/ThemeContext";
import SaveNote from "./SaveNote";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";

export interface NoteBoxProps {
  note: Notes;
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
  index: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

const NoteBox: React.FC<NoteBoxProps> = ({
  note,
  notes,
  index,
  setNotes,
  setEditIndex,
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
          <SaveNote note={note} setNotes={setNotes} />
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
            <EditNote notes={notes} index={index} setEditIndex={setEditIndex} />
            <DeleteNote note={note} notes={notes} setNotes={setNotes} />
          </div>
        </span>
      </div>
    </li>
  );
};

export default NoteBox;
