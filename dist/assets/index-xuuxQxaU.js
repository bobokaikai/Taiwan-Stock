function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C45pIAg_.js","assets/index-6wgA6Wbd.js","assets/index-C8W0w4C7.css","assets/index-DKC6Yu9d.js","assets/index-BaZMA9E9.js","assets/index-DTc1ShS9.js","assets/index-BhJziEl5.js","assets/index-DYoPgUVA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-6wgA6Wbd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C45pIAg_.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DKC6Yu9d.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BaZMA9E9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DTc1ShS9.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BhJziEl5.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DYoPgUVA.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
