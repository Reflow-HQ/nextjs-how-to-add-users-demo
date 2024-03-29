export function ToggleEditingModeButton({
  label,
  isEditing,
  startEditing,
  cancelEditing,
}: {
  label: string;
  isEditing: boolean;
  startEditing: Function;
  cancelEditing: Function;
}) {
  return (
    <button
      className="mb-10 mt-2 block text-sm text-gray-500 hover:text-gray-800"
      onClick={() => {
        if (isEditing) {
          cancelEditing();
        } else {
          startEditing();
        }
      }}
    >
      {isEditing ? "Cancel" : label}
    </button>
  );
}
