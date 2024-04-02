"use client";

import { useFormState } from "react-dom";
import { updateUser } from "@/lib";
import { FormSubmitButton } from "./FormSubmitButton";
import { FormResultMessage } from "./FormResultMessage";
import { LoadingIndicator } from "./LoadingIndicator";

export default function UpdateUserName({ name }: { name?: string }) {
  const [formState, formAction] = useFormState<{
    success?: boolean;
    message?: string;
    timestamp?: number;
  }>(updateUser, {});

  return (
    <>
      <form action={formAction}>
        <label className="mb-1 block font-bold" htmlFor="username">
          Username
        </label>
        <div className="mb-10 flex w-80 items-center justify-center sm:w-96">
          <input
            className="mr-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 read-only:bg-gray-100 focus:outline-none"
            id="username"
            type="text"
            name="username"
            defaultValue={name}
            required
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
