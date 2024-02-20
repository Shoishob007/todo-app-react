// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SaveDeleteNotes from "../components/SaveAndDeleteNote";
import AddUpdateNotes from "../components/AddUpdateNotes";
import { useTheme } from "../components/ThemeContext";
import { ToggleLightTheme, ToggleDarkTheme } from "../components/TodoSvg";

export interface Notes {
  id: number;
  title: string;
  description: string;
  done?: boolean;
  editDate: string;
}

export default function Note() {
  const [notes, setNotes] = useState<Notes[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
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
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="flex flex-col min-h-screen dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <p className="pb-4 text-xl sm:text-2xl mx-auto font-bold underline underline-offset-4 dark:text-slate-300">
        Add Your Note
      </p>
      <AddUpdateNotes
        notes={notes}
        setNotes={setNotes}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <div className="flex flex-col font-medium p-2 sm:p-4">
        <p className="py-2 text-xl sm:text-2xl mx-auto  font-bold underline underline-offset-4 dark:text-slate-300">
          My Notes
        </p>
        <div className="py-4 px-6 mx-auto">
          <ul className=" flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <SaveDeleteNotes
                  key={index}
                  note={note}
                  index={index}
                  notes={notes}
                  setNotes={setNotes}
                  setEditIndex={setEditIndex}
                />
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
