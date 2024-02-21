import React, { useState } from "react";
import { Notes } from "../pages/Note";
import { useTheme } from "./ThemeContext";
import SaveButton, { SaveIcon, UnsaveIcon } from "./SaveButton";
import EditButton, { EditIcon } from "./EditButton";
import DeleteButton, { DeleteIcon } from "./DeleteButton";

export interface SaveDeleteNotesProps {
  note: Notes;
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
  index: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SaveDeleteNotes: React.FC<SaveDeleteNotesProps> = ({
  note,
  notes,
  index,
  setNotes,
  setEditIndex,
}) => {
  const { darkMode } = useTheme();
  const [, setTitle] = useState<string>("");
  const [, setDescription] = useState<string>("");

  const editNote = (index: number) => {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditIndex(index);
  };

  const toggleNote = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  const deleteNote = (id: number) => {
    const filteredNotes = notes.filter((item) => item.id !== id);
    setNotes(filteredNotes);
    setTitle("");
    setDescription("");
  };

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
          <SaveButton
            icon={note.done ? <UnsaveIcon /> : <SaveIcon />}
            color="#059669"
            onClick={() => toggleNote(note.id)}
          />
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
            <EditButton
              smH={5}
              smW={5}
              h={4}
              w={4}
              darkMode={darkMode}
              icon={
                <EditIcon darkMode={darkMode} smH={5} smW={5} h={4} w={4} />
              }
              onClick={() => editNote(index)}
            />
            <DeleteButton
              smH={5}
              smW={5}
              h={4}
              w={4}
              darkMode={darkMode}
              icon={
                <DeleteIcon darkMode={darkMode} smH={5} smW={5} h={4} w={4} />
              }
              onClick={() => deleteNote(note.id)}
            />
          </div>
        </span>
      </div>
    </li>
  );
};

export default SaveDeleteNotes;
