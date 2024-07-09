import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.fpjUh8TL.js","_app/immutable/chunks/scheduler.CZVSwyj5.js","_app/immutable/chunks/index.B-JaJmti.js","_app/immutable/chunks/each.BvlT3C48.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.Bt73cWWR.js","_app/immutable/chunks/index.B_Dqn0S5.js","_app/immutable/chunks/entry.BDOvSiQ9.js"];
export const stylesheets = ["_app/immutable/assets/Toaster.CLpmFrbv.css"];
export const fonts = [];
