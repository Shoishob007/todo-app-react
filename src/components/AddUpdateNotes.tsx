import React, { useState, useEffect } from "react";
import { Notes } from "../pages/Note";

interface AddUpdateNoteProps {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
  editIndex: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AddUpdateNotes: React.FC<AddUpdateNoteProps> = ({
  notes,
  setNotes,
  editIndex,
  setEditIndex,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editDate, setEditDate] = useState<string>("Not edited yet!");

  useEffect(() => {
    if (editIndex !== -1) {
      setTitle(notes[editIndex].title);
      setDescription(notes[editIndex].description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editIndex, notes]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (editIndex === -1) {
      if (title.trim() !== "" && description.trim() !== "") {
        setNotes([
          ...notes,
          {
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            editDate: editDate,
          },
        ]);
        setTitle("");
        setDescription("");
      }
    } else {
      if (title.trim() !== "" && description.trim() !== "") {
        const updatedNotes = [...notes];
        const newEditDate = new Date().toLocaleDateString("en-GB");
        updatedNotes[editIndex].title = title.trim();
        updatedNotes[editIndex].description = description.trim();
        if (editIndex !== -1) {
          updatedNotes[editIndex].editDate = newEditDate;
        }
        setEditDate(newEditDate);
        setNotes(updatedNotes);
        setEditIndex(-1);
        setTitle("");
        setDescription("");
      }
    }
  };

  return (
    <div className="inputBox border border-blue-950 rounded-lg h-40 sm:h-44  w-52 sm:w-96 mx-auto flex flex-col shadow-xl justify-evenly dark:bg-slate-800">
      <input
        type="text"
        className="p-2 border-b-2 border-b-emerald-300 dark:border-b-emerald-600 rounded-lg border-dashed outline-none placeholder:font-semibold placeholder:italic placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:bg-slate-800 dark:text-slate-200"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="p-2 placeholder:font-medium h-16 sm:h-20 resize-none outline-none placeholder:italic placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:bg-slate-800 dark:text-slate-200"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      {editIndex === -1 ? (
        <button
          className=" w-16 sm:w-24 h-7 sm:h-8 rounded-lg text-white bg-emerald-600 dark:bg-teal-800 hover:bg-blue-900 dark:hover:bg-blue-900 hover:scale-105 duration-200 font-light sm:font-md mx-auto "
          onClick={handleAddButtonClick}
        >
          Save
        </button>
      ) : (
        <button
          className="w-16 sm:w-24 h-7 sm:h-8 rounded-lg text-white bg-emerald-600 hover:scale-105 hover:bg-blue-900 duration-200 font-light sm:font-md mx-auto "
          onClick={handleAddButtonClick}
        >
          Save Edits
        </button>
      )}
    </div>
  );
};

export default AddUpdateNotes;
