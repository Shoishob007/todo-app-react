import React from "react";
import { useTheme } from "../context/ThemeContext";
import EditButton, { EditIcon } from "../icons/EditButton";

interface EditTodoProps {
  index: number;
  setEditIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const EditTodo: React.FC<EditTodoProps> = ({ index, setEditIndex }) => {
  const { darkMode } = useTheme();

  const setEdit = (index: number) => {
    setEditIndex(index);
  };

  return (
    <div>
      <EditButton
        darkMode={darkMode}
        icon={<EditIcon darkMode={darkMode} />}
        onClick={() => setEdit(index)}
      />
    </div>
  );
};

export default EditTodo;
