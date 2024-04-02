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
        "pointer-events-none absolute left-1/2 top-4 w-64 -translate-x-1/2 transform rounded border bg-white p-1 text-center text-sm transition duration-500",
        toastMessage ? "opacity-100" : "opacity-0",
        resultSuccess
          ? "border-blue-500 text-blue-500"
          : "border-red-700 text-red-700",
      )}
    >
      {message}
    </div>
  );
}
