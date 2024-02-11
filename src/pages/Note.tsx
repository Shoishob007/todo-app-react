// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteOperations from "../components/NoteOperations"
import AddUpdateNotes from "../components/AddUpdateNotes";

export interface Notes {
  id : number;
  title : string;
  description : string;
  done ?: boolean;
}

export default function Note() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [notes, setNotes] = useState<Notes[]>(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [editIndex, setEditIndex] = useState<number>(-1);


  const addNote = (title: string, description : string) => {
    if (title != "" && description != "") {
      setNotes([
        ...notes,
        { id: Date.now(), title: title, description: description },
      ]);
    }
  };

  const editNote = (index : number) => {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditIndex(index);
  };

  const updateNote = (updatedTitle : string, updatedDescription : string) => {
    const updatedNotes = [...notes];
    updatedNotes[editIndex].title = updatedTitle;
    updatedNotes[editIndex].description = updatedDescription;
    setNotes(updatedNotes);
    setEditIndex(-1);
    setTitle("");
    setDescription("");
  };

  const toggleNote = (id : number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  const deleteNote = (id : number) => {
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
      <AddUpdateNotes
        onAddNote={addNote}
        onUpdateNote={updateNote}
        editIndex={editIndex}
        title={title}
        description={description}
      />
      <div className="flex flex-col font-medium p-2 sm:p-4">
        <p className="py-2 text-xl sm:text-2xl mx-auto  font-bold underline underline-offset-4">
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
      </div>
    </div>
  );
}
