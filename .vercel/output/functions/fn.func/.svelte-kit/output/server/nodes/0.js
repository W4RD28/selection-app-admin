import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.31c68afd.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.6c4b92a0.js","_app/immutable/chunks/navigation.2d7902d0.js","_app/immutable/chunks/singletons.60a37931.js"];
export const stylesheets = ["_app/immutable/assets/app.d8736df4.css"];
export const fonts = [];
