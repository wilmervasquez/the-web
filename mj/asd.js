import { arbol } from "./store.js"

export function getWidget(id){
  const template = document.getElementById(id)
  return function(){
    return template.content.cloneNode(true)
  }
}

arbol.onUpdate((newValue)=>{
  console.log(newValue,67)
})