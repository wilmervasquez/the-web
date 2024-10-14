import { arbol } from "./store.js";

function querySelector(selector){
  return document.querySelector(selector);
}

arbol.onUpdate((newValue)=>{
  console.log(newValue,670)
})

export {querySelector }