import "server-only";
import { ReflowAuth } from "@reflowhq/auth-next";

export default function getAuth(): ReflowAuth {
  const { SESSION_SECRET, REFLOW_PROJECT_ID } = process.env;
  const config = {
    projectID: Number(REFLOW_PROJECT_ID),
    secret: String(SESSION_SECRET),
  };
  return new ReflowAuth(config);
}
