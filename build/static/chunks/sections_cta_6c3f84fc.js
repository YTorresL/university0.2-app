(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/sections/cta.js [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_88e19fd3.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/node_modules_86304d70._.js",
  "static/chunks/sections_cta_72c06dc7.js",
  "static/chunks/sections_cta_0cb6313b.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/sections/cta.js [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
}]);