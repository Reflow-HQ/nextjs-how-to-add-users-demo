import clsx from "clsx";
import { useEffect, useState } from "react";

export function FormResultMessage({
  message,
  resultSuccess,
  timestamp,
}: {
  message?: string;
  resultSuccess?: boolean;
  timestamp?: number;
}) {
  const [toastMessage, setToastMessage] = useState<string | undefined>(message);

  useEffect(() => {
    if (message) {
      setToastMessage(message);
      setTimeout(() => {
        setToastMessage(undefined);
      }, 3000);
    }
  }, [message, timestamp]);

  return (
    <div
      className={clsx(
        "pointer-events-none absolute right-4 top-4 w-64 rounded border bg-white p-4 text-center transition duration-500",
        toastMessage ? "opacity-100" : "opacity-0",
        resultSuccess
          ? "border-blue-600 text-blue-600"
          : "border-red-700 text-red-700",
      )}
    >
      {message}
    </div>
  );
}
