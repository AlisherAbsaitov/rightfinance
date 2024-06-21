import { create } from "zustand";

const useStore = create((set)=>({
   lang:false,
   setLang:(value)=>set(()=>({lang:value})),
   login:false,
   setLogin:(value)=>set(()=>({login:value})),
})) 
export default useStore; 