"use client";

import { signIn } from "@reflowhq/auth-next/client";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn({ onSuccess: () => location.reload() })}
      className="focus:shadow-outline w-24 rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 focus:outline-none"
    >
      Sign In
    </button>
  );
}
