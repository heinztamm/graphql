export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","favicon.png","output.css","robots.txt"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cl1_y5p6.js","app":"_app/immutable/entry/app.Dfvz0RMF.js","imports":["_app/immutable/entry/start.Cl1_y5p6.js","_app/immutable/chunks/entry.B3RQ6CYM.js","_app/immutable/chunks/scheduler.CZVSwyj5.js","_app/immutable/chunks/index.B_Dqn0S5.js","_app/immutable/entry/app.Dfvz0RMF.js","_app/immutable/chunks/scheduler.CZVSwyj5.js","_app/immutable/chunks/index.B-JaJmti.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
