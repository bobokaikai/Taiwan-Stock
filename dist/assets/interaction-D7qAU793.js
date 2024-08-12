function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-BGXLSc26.js","assets/Ranges-DUFTu7l5.js","assets/index-6wgA6Wbd.js","assets/index-C8W0w4C7.css","assets/index-Dqn24NtO.js","assets/OptionsColor-1cbUpPR0.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-6wgA6Wbd.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-BGXLSc26.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
