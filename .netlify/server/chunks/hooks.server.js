import "./index.js";
import { parse } from "cookie";
const handle = async ({ event, resolve }) => {
  const cookies = parse(event.request.headers.get("cookie") || "");
  cookies.user;
  return await resolve(event);
};
export {
  handle
};
