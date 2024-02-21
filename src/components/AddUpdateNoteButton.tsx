interface AddUpdateNoteButtonProps {
  handleAddButtonClick: () => void;
}

export const AddNoteButton: React.FC<AddUpdateNoteButtonProps> = ({
  handleAddButtonClick,
}) => {
  return (
    <>
      <button
        className=" w-16 sm:w-24 h-7 sm:h-8 rounded-lg text-white bg-emerald-600 dark:bg-teal-800 hover:bg-blue-900 dark:hover:bg-blue-900 hover:scale-105 duration-200 font-light sm:font-md mx-auto "
        onClick={handleAddButtonClick}
      >
        Save
      </button>
    </>
  );
};

export const UpdateNoteButton: React.FC<AddUpdateNoteButtonProps> = ({
  handleAddButtonClick,
}) => {
  return (
    <>
      <button
        className="w-16 sm:w-24 h-7 sm:h-8 rounded-lg text-white bg-emerald-600 hover:scale-105 hover:bg-blue-900 duration-200 font-light sm:font-md mx-auto "
        onClick={handleAddButtonClick}
      >
        Save Edits
      </button>
    </>
  );
};
