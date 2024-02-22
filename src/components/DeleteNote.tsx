import React, { useState } from "react";
import { Notes } from "../pages/Note";
import { useTheme } from "../context/ThemeContext";
import DeleteButton, { DeleteIcon } from "../icons/DeleteButton";

export interface NoteBoxProps {
  note: Notes;
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const NoteBox: React.FC<NoteBoxProps> = ({ note, notes, setNotes }) => {
  const { darkMode } = useTheme();
  const [, setTitle] = useState<string>("");
  const [, setDescription] = useState<string>("");

  const deleteNote = (id: number) => {
    const filteredNotes = notes.filter((item) => item.id !== id);
    setNotes(filteredNotes);
    setTitle("");
    setDescription("");
  };

  return (
    <DeleteButton
      darkMode={darkMode}
      icon={<DeleteIcon darkMode={darkMode} />}
      onClick={() => deleteNote(note.id)}
    />
  );
};

export default NoteBox;
