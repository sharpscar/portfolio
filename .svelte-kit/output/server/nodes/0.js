

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D8wMXIVw.js","_app/immutable/chunks/xLVjg6aZ.js","_app/immutable/chunks/K3dEun9Q.js","_app/immutable/chunks/DUcIx5AZ.js"];
export const stylesheets = ["_app/immutable/assets/0.woh499Lt.css"];
export const fonts = [];
