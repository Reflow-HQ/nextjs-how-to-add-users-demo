"use server";

import getAuth from "@/auth";
import { UpdateUserOptions } from "@reflowhq/auth-next/types";

export async function updateUser(
  prevState: any,
  formData: FormData = new FormData(),
) {
  try {
    const auth = getAuth();

    const update: UpdateUserOptions = {};

    if (formData.get("username"))
      update.name = formData.get("username") as string;

    if (formData.get("photo")) update.photo = formData.get("photo") as Blob;

    const result = await auth.updateUser(update);

    if (!result.success) {
      throw new Error();
    }

    await auth.refresh();
    return {
      success: true,
      message: "User Updated!",
      timestamp: new Date().getTime(),
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: "User Update Failed",
      timestamp: new Date().getTime(),
    };
  }
}
