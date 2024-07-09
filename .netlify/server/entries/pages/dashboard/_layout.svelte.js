import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row min-h-screen">${slots.default ? slots.default({}) : ``} <nav class="h-min m-2"><button class="w-16 h-16 p-2 border mb-5 drop-shadow-md bg-gradient-to-l from-sky-900/80 to-sky-200/50 rounded-xl pointer text-white" data-svelte-h="svelte-1vpxbcv">Sign Out</button></nav></div>`;
});
export {
  Layout as default
};
