export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","projects/allocator.jpg","projects/compiler.jpg","projects/datastructures.jpg","projects/game-engine.jpg","projects/neural-net.jpg","projects/raytracer.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.5kAZBVM3.js",app:"_app/immutable/entry/app.Crs6--MS.js",imports:["_app/immutable/entry/start.5kAZBVM3.js","_app/immutable/chunks/CI_n31wg.js","_app/immutable/chunks/K3dEun9Q.js","_app/immutable/chunks/Dka_-puw.js","_app/immutable/entry/app.Crs6--MS.js","_app/immutable/chunks/K3dEun9Q.js","_app/immutable/chunks/pWdLwQQu.js","_app/immutable/chunks/DqA1kr2a.js","_app/immutable/chunks/xLVjg6aZ.js","_app/immutable/chunks/Dka_-puw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
