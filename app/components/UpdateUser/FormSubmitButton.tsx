import clsx from "clsx";

export function FormSubmitButton({ isHidden }: { isHidden: boolean }) {
  return (
    <button
      type="submit"
      className={clsx(
        "focus:shadow-outline w-24 rounded-r bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 focus:outline-none",
        isHidden ? "hidden" : "",
      )}
    >
      Save
    </button>
  );
}
