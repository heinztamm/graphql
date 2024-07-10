import { c as create_ssr_component, e as escape, g as add_attribute, i as each } from "../../../chunks/ssr.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import "devalue";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const firstName = data.user.name;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-row flex-grow"><div class="flex flex-col content-center w-1/5"><h1 class="text-4xl size-fit m-2" data-svelte-h="svelte-1rtz358">Dashboard</h1> <h2 class="m-2">Welcome, ${escape(firstName)}</h2></div> <div class="flex flex-col flex-grow"><div class="flex flex-row bg-sky-900 items-center rounded-lg m-2"><svg class="rounded-lg p-px m-2 flex-grow" height="100" role="img"><g transform="translate(0, 15)"><rect${add_attribute("width", data.auditSumUp / 5e3, 0)} height="30" class="fill-current text-emerald-900" stroke="white" stroke-width="0.5"></rect><text y="20" x="10" fill="white">Done</text><text y="20"${add_attribute("x", data.auditSumUp / 5e3 + 5, 0)} fill="white">${escape(Math.round(data.auditSumUp / 1e4) / 100)} MB</text></g><g transform="translate(0, 55)"><rect${add_attribute("width", data.auditSumDown / 5e3, 0)} height="30" class="fill-current text-rose-900" stroke="white" stroke-width="0.5"></rect><text y="20" x="10" fill="white">Received</text><text y="20"${add_attribute("x", data.auditSumDown / 5e3 + 5, 0)} fill="white">${escape(Math.round(data.auditSumDown / 1e4) / 100)} MB</text></g></svg> <div class="w-1/2 flex flex-row items-center"><h2 data-svelte-h="svelte-2ckbbv">Audits ratio:</h2> <h2 class="text-4xl ml-3 text-amber-500">${escape(Math.round(data.user.auditRatio * 100) / 100)}</h2></div></div> <h2 class="ml-2 text-2xl">Total XP earned: ${escape(Math.round(data.totalXP / 1e3))} kB</h2> <svg class="bg-sky-900 m-2 rounded-lg pt-4 grow min-w-fit" height="540">${each(data.XP_Transfers, (project, i) => {
    return `<g${add_attribute("transform", `translate(0, ${i * 30})`, 0)} class="group"><rect${add_attribute("width", project.amount / 200, 0)} height="20" class="fill-current text-amber-500 hover:text-amber-300 transition-all"></rect><text${add_attribute("x", project.amount / 200 + 5, 0)} y="15" class="group-hover:scale-0" fill="white">${escape(project.object.name)}</text><text${add_attribute("x", project.amount / 200 + 5, 0)} y="15" class="text-white scale-0 group-hover:scale-100 bg-black" fill="white">${escape(project.amount / 1e3)} kB
			</text></g>`;
  })}</svg></div></div>`;
});
export {
  Page as default
};
