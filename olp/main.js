import { app } from "./kl.js";

import io from "./io.js"

io()
const btn = document.querySelector("button");
btn.addEventListener('click',()=>{
  console.log(12)
})
btn.addEventListener('click',()=>{
  console.log(120)
})



const [response, error] = await useLint(fetch(''))

