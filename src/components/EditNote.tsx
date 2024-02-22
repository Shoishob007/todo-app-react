import React, { useState } from "react";
import { Notes } from "../pages/Note";
import { useTheme } from "../context/ThemeContext";
import EditButton, { EditIcon } from "../icons/EditButton";

export interface NoteBoxProps {
  notes: Notes[];
  index: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

const NoteBox: React.FC<NoteBoxProps> = ({ notes, index, setEditIndex }) => {
  const { darkMode } = useTheme();
  const [, setTitle] = useState<string>("");
  const [, setDescription] = useState<string>("");

  const editNote = (index: number) => {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setEditIndex(index);
  };

  return (
    <>
      <EditButton
        darkMode={darkMode}
        icon={<EditIcon darkMode={darkMode} />}
        onClick={() => editNote(index)}
      />
    </>
  );
};

export default NoteBox;
