import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BKeYg0w7.js","_app/immutable/chunks/scheduler.CZVSwyj5.js","_app/immutable/chunks/index.B-JaJmti.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.Bt73cWWR.js","_app/immutable/chunks/index.B_Dqn0S5.js"];
export const stylesheets = ["_app/immutable/assets/Toaster.CLpmFrbv.css"];
export const fonts = [];
