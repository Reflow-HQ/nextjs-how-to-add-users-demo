"use client";

import { useFormState } from "react-dom";
import { updateUser } from "@/lib";
import { useEffect, useRef, useState } from "react";
import { FormSubmitButton } from "./FormSubmitButton";
import { FormResultMessage } from "./FormResultMessage";
import { LoadingIndicator } from "./LoadingIndicator";

export default function UpdateUserPhoto({ photo }: { photo?: string }) {
  const [formState, formAction] = useFormState<{
    success?: boolean;
    message?: string;
    timestamp?: number;
  }>(updateUser, {});

  const fileInputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (formState.success) {
      if (fileInputElement.current) {
        fileInputElement.current.value = "";
      }
    }
  }, [formState]);

  return (
    <>
      <form action={formAction}>
        <label className="mb-1 block font-bold" htmlFor="photo">
          Profile Image
        </label>
        <div className="mb-10 mt-2 flex w-80 items-center justify-center sm:w-96">
          <input
            id="photo"
            name="photo"
            ref={fileInputElement}
            type="file"
            accept=".png, .jpg, .jpeg"
            required
            className="border-secondary-500 relative me-2 block w-full cursor-pointer rounded border border-solid px-3 py-2 leading-tight text-gray-700 file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden  file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3 focus:outline-none"
          ></input>

          <FormSubmitButton />

          <LoadingIndicator />
        </div>
      </form>

      <FormResultMessage
        message={formState.message}
        resultSuccess={formState.success}
        timestamp={formState.timestamp}
      />
    </>
  );
}
