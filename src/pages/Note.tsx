// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteOperations from "../components/NoteOperations";
import AddUpdateNotes from "../components/AddUpdateNotes";
import { useTheme } from "../components/ThemeContext";

export interface Notes {
  id: number;
  title: string;
  description: string;
  done?: boolean;
  editDate: string;
}

export default function Note() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [notes, setNotes] = useState<Notes[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [editDate, setEditDate] = useState<string>("Not edited yet!");
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const addNote = (title: string, description: string) => {
    // const currentDate = new Date().toLocaleDateString();
    if (title != "" && description != "") {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title: title,
          description: description,
          editDate: editDate,
        },
      ]);
    }
  };

  const editNote = (index: number) => {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditIndex(index);
  };

  const updateNote = (updatedTitle: string, updatedDescription: string) => {
    const updatedNotes = [...notes];
    const newEditDate = new Date().toLocaleDateString("en-GB");
    updatedNotes[editIndex].title = updatedTitle;
    updatedNotes[editIndex].description = updatedDescription;
    if (editIndex !== -1) {
      updatedNotes[editIndex].editDate = newEditDate;
    }
    setEditDate(newEditDate);
    setNotes(updatedNotes);
    setEditIndex(-1);
    setTitle("");
    setDescription("");
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
        onAddNote={addNote}
        onUpdateNote={updateNote}
        editIndex={editIndex}
        title={title}
        description={description}
      />
      <div className="flex flex-col font-medium p-2 sm:p-4">
        <p className="py-2 text-xl sm:text-2xl mx-auto  font-bold underline underline-offset-4 dark:text-slate-300">
          My Notes
        </p>
        <div className="py-4 px-6 mx-auto">
          <ul className=" flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <NoteOperations
                  key={index}
                  note={note}
                  index={index}
                  toggleNote={toggleNote}
                  editNote={editNote}
                  deleteNote={deleteNote}
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
