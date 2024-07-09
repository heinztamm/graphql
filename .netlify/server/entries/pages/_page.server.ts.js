import { r as redirect } from "../../chunks/index.js";
const actions = {
  login: async ({ cookies, request }) => {
    const body = await request.formData();
    const login = body.get("login");
    const password = body.get("password");
    const credentials = btoa(`${login}:${password}`);
    const response = await fetch("https://01.kood.tech/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${credentials}`
      }
    });
    if (response.ok) {
      const result = await response.json();
      cookies.set("token", result, {
        path: "/",
        secure: true,
        expires: new Date(Date.now() + 1e3 * 60 * 20)
        // 20min
      });
      cookies.set("toast", "You're In!", {
        path: "/dashboard",
        maxAge: 60,
        httpOnly: false,
        secure: true,
        sameSite: "none"
      });
      throw redirect(303, "/dashboard");
    } else {
      cookies.set("toast", "Username/password not recognized", {
        path: "/",
        maxAge: 1,
        httpOnly: false,
        secure: true,
        sameSite: "none"
      });
    }
  }
};
export {
  actions
};
