"use client";

import { useFormState } from "react-dom";
import { updateUser } from "@/lib";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FormSubmitButton } from "./FormSubmitButton";
import { FormResultMessage } from "./FormResultMessage";
import { LoadingIndicator } from "./LoadingIndicator";
import { ToggleEditingModeButton } from "./ToggleEditingModeButton";
import Image from "next/image";

export default function UpdateUserPhoto({ photo }: { photo?: string }) {
  const fileInputElement = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [formState, formAction] = useFormState<{
    success?: boolean;
    message?: string;
    timestamp?: number;
  }>(updateUser, {});

  const startEditing = () => {
    // Show the file input form.
    setIsEditing(true);
  };

  const stopEditing = () => {
    // Hide the file input form and clear it.
    setIsEditing(false);
    if (fileInputElement.current) {
      fileInputElement.current.value = "";
    }
  };

  useEffect(() => {
    if (formState.success) {
      stopEditing();
    }
  }, [formState]);

  return (
    <>
      {photo && (
        <>
          <Image
            src={photo}
            alt="User Profile"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover"
          />
        </>
      )}

      <form action={formAction}>
        <div
          className={clsx(
            "mt-2 flex w-80 items-center justify-center sm:w-96",
            isEditing ? "" : "hidden",
          )}
        >
          <input
            required
            ref={fileInputElement}
            className="border-secondary-500 relative block w-full cursor-pointer rounded rounded-r-none border border-solid px-3 py-2 leading-tight text-gray-700 file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none  file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3 focus:outline-none"
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
          ></input>

          <FormSubmitButton isHidden={!isEditing} />

          <LoadingIndicator />
        </div>
      </form>

      <ToggleEditingModeButton
        label="Edit Image"
        isEditing={isEditing}
        startEditing={startEditing}
        cancelEditing={stopEditing}
      />

      <FormResultMessage
        message={formState.message}
        resultSuccess={formState.success}
        timestamp={formState.timestamp}
      />
    </>
  );
}
