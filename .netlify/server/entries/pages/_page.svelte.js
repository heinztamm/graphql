import { c as create_ssr_component, g as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "../../chunks/index.js";
let input_style = "p-2 rounded w-full border font-dark";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let login = "";
  let password = "";
  return `<form method="POST" action="?/login" class="w-80 form m-auto object-bottom items-center relative space-y-1.5 text-black"><div class="flex relative"><input type="text" placeholder="Username/email" name="login" autocomplete="" required${add_attribute("class", input_style, 0)}${add_attribute("value", login, 0)}></div> <div class="flex relative"><input type="password" name="password" placeholder="password" autocomplete="current-password" id="password" required${add_attribute("class", input_style, 0)}${add_attribute("value", password, 0)}></div> <div class="flex relative" data-svelte-h="svelte-18roi9s"><button type="submit" class="p-2 border mb-5 drop-shadow-md bg-gradient-to-l from-sky-900/80 to-sky-200/50 rounded-xl pointer w-full text-white">Sign in</button></div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="place-self-center">${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
