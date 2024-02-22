import React from "react";
import { Notes } from "../pages/Note";
import SaveButton, { SaveIcon, UnsaveIcon } from "../icons/SaveButton";

export interface SaveNoteProps {
  note: Notes;
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const SaveNote: React.FC<SaveNoteProps> = ({ note, setNotes }) => {
  const toggleNote = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  return (
    <SaveButton
      icon={note.done ? <UnsaveIcon /> : <SaveIcon />}
      color="#059669"
      onClick={() => toggleNote(note.id)}
    />
  );
};

export default SaveNote;
