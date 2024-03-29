"use client";

import { useFormState } from "react-dom";
import { updateUser } from "@/lib";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FormSubmitButton } from "./FormSubmitButton";
import { FormResultMessage } from "./FormResultMessage";
import { LoadingIndicator } from "./LoadingIndicator";
import { ToggleEditingModeButton } from "./ToggleEditingModeButton";

export default function UpdateUserName({ name }: { name?: string }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(name || "");
  const previousInputValue = useRef<string>(name || "");
  const textInputElement = useRef<HTMLInputElement>(null);

  const [formState, formAction] = useFormState<{
    success?: boolean;
    message?: string;
    timestamp?: number;
  }>(updateUser, {});

  const startEditing = () => {
    // Show the text input form.
    setIsEditing(true);

    // Remember the old input value, so we can restore it we need to.
    previousInputValue.current = inputValue;

    // Focus the text input.
    textInputElement.current?.focus();
    textInputElement.current?.setSelectionRange(-1, -1);
  };

  const stopEditing = () => {
    // Return the input to the old value and hide the form.
    setInputValue(previousInputValue.current);
    setIsEditing(false);
  };

  useEffect(() => {
    setInputValue(name || "");
  }, [name]);

  useEffect(() => {
    if (formState.success) {
      setIsEditing(false);
    }
  }, [formState]);

  return (
    <>
      <form action={formAction}>
        <div className="flex w-80 items-center justify-center sm:w-96">
          <input
            className={clsx(
              "w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 read-only:bg-gray-100 focus:outline-none",
              isEditing ? "rounded-r-none" : "text-center",
            )}
            ref={textInputElement}
            required
            type="text"
            name="username"
            placeholder="Username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            readOnly={!isEditing}
          ></input>

          <FormSubmitButton isHidden={!isEditing} />

          <LoadingIndicator />
        </div>
      </form>

      <ToggleEditingModeButton
        label="Edit Username"
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
