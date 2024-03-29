import "server-only";
import { ReflowAuth } from "@reflowhq/auth-next";

export default function getAuth(): ReflowAuth {
  const { SESSION_SECRET, REFLOW_STORE_ID } = process.env;
  const config = {
    storeID: Number(REFLOW_STORE_ID),
    secret: String(SESSION_SECRET),
  };
  return new ReflowAuth(config);
}
