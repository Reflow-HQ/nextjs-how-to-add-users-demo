This example demonstrates how to add user accounts to any Next.js 14 app using [Reflow Auth](https://github.com/Reflow-HQ/libs/tree/master/auth-next).

The app features a simple registration/sign in flow using either email and password or a social provider account. When signed in, users can view their profile information and make changes to their username and profile image.

You can view a live demo here - [https://nextjs-how-to-add-users-demo.vercel.app/](https://nextjs-how-to-add-users-demo.vercel.app/)

# Getting Started

To run the example, follow these steps

1. `npm install` the dependencies in this folder
2. Create a file named `.env.local` and fill out the following environment variables:

- `REFLOW_STORE_ID` - The ID of your Reflow store, required for using the library. You can obtain it from your Reflow store's [settings page](https://reflowhq.com/store/settings).
- `SESSION_SECRET` - This is a secret string that will be used for encrypting user sessions. You can enter any random 32 char string.

3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.
