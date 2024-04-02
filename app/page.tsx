import Image from "next/image";
import getAuth from "@/auth";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UpdateUserName from "./components/UpdateUser/UpdateUserName";
import UpdateUserPhoto from "./components/UpdateUser/UpdateUserPhoto";

export default async function Home() {
  const auth = getAuth();
  const user = await auth.user();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 lg:p-24">
      <div>
        <div className="text-md z-10 mb-28 flex w-full max-w-5xl flex-col items-center lg:flex-row lg:justify-between">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://reflowhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/reflow.svg"
              alt="Reflow Logo"
              width={60}
              height={60}
              className="w-14"
              priority
            />
            <span className="mx-2 text-xl">+</span>
            <Image
              className="relative w-24"
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={24}
              priority
            />
          </a>

          <a
            className="group flex gap-2 rounded-xl border border-gray-300 bg-gray-100 bg-gradient-to-b from-zinc-100 px-8 py-3 text-center backdrop-blur-2xl hover:bg-gray-200 hover:from-zinc-200"
            href="https://reflowhq.com/TODO"
          >
            <span>Read the full article </span>
            <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mb-20 text-center">
          <h1 className="mb-8 text-2xl font-bold">
            How to add users to any Next.js app
          </h1>

          <p className="mb-4 max-w-2xl">
            This simple demo uses the{" "}
            <a
              className="text-blue-500 hover:text-blue-600"
              href="https://github.com/Reflow-HQ/libs/tree/master/auth-next"
              target="_blank"
            >
              Reflow auth library
            </a>{" "}
            for adding user accounts.
          </p>
          <p className="max-w-2xl">
            The registration process, as well as signing in and out is handled
            entirely by the library. <br /> Users can sign up with email and
            password or by using their social accounts.
          </p>
        </div>
      </div>

      <div className="relative flex w-full max-w-xl flex-col items-center border bg-white p-10 text-left">
        {user ? (
          <>
            <h2 className="mb-8 font-bold">
              Hello, {user.name || user.email}!
            </h2>

            <Image
              src={user.photo}
              alt="User Profile"
              width={96}
              height={96}
              className="mb-10 h-24 w-24 rounded-full object-cover"
            />

            <UpdateUserName name={user.name} />
            <UpdateUserPhoto photo={user.photo} />

            <LogoutButton />
          </>
        ) : (
          <>
            <p className="mb-4">Sign in to get started</p>
            <LoginButton />
          </>
        )}
      </div>
    </main>
  );
}
