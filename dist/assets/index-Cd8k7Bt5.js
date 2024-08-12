function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DMkHX6v8.js","assets/index-6wgA6Wbd.js","assets/index-C8W0w4C7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-6wgA6Wbd.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DMkHX6v8.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
