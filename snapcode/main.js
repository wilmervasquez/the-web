import { VSCodeSnapCode } from "./lib/SnapCode.js";
import { fontFeatureSettings, images, months } from './lib/util.js'

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Inputs
const app = {
  cvW: document.querySelector(".canvas-width"),
  cvH: document.querySelector(".canvas-height"),

  input: {
    title: document.getElementById("title"),
    by: document.getElementById("by"),
    lang: document.getElementById("languaje"),
    background: document.getElementById("background")
  },
  select: {
    IconNetwork: document.getElementById("select-icon-network"),
    FontFamily: document.querySelector("select")
  },
  checkbox: {
    italic: document.querySelector(".italic"),
    ligatures: document.getElementById('font-ligatures'),
    fondo: document.getElementById('fondo')
  },
  button: {
    remove: document.getElementById('btn-remove'),
    paste: document.querySelector(".btn-paste")

  }
}

app.input.background.value = localStorage.getItem('background') ?? ''

app.select.IconNetwork.value = localStorage.getItem('iconNetwork') ?? 'instagram'


const snapVSCode = new VSCodeSnapCode(canvas, ctx, app)

app.input.lang.value = localStorage.getItem('languaje') ?? "txt"
app.input.lang.addEventListener('input', (e)=>{
  languaje = e.target.value
  localStorage.setItem('languaje',languaje)
  snapVSCode.render()
});

app.checkbox.fondo.addEventListener('change', () => snapVSCode.render)


let title = localStorage.getItem('title') ?? '';
let by = localStorage.getItem('by') ?? "you"

const config = {
  borderRadius: 30,
  fontFeatureSettings: fontFeatureSettings.CascadiaCode
}

app.input.title.value = title
app.input.by.value = by

app.checkbox.ligatures.checked =  Boolean(Number(localStorage.getItem('font-ligatures') ?? '1'))
canvas.style.fontFeatureSettings = app.checkbox.ligatures.checked ? config.fontFeatureSettings : "normal";

app.checkbox.ligatures.addEventListener('click', ({target}) => {
  snapVSCode.setFontFeatureSettings(target.checked)
  snapVSCode.render()
})

app.select.FontFamily.value = snapVSCode.font.family

let languaje = app.input.lang.value

app.button.paste.addEventListener("click", async () => {
  const clipboardItems = await navigator.clipboard.read();

  for (const clipboardItem of clipboardItems) {
    if (clipboardItem.types.includes("text/html")) {
      const htmlBlob = await clipboardItem.getType("text/html");
      const htmlText = await htmlBlob.text();
      localStorage.setItem('html', htmlText)
      snapVSCode.setXML(localStorage.getItem('html'))
    }
  }
  snapVSCode.render();
});

app.select.FontFamily.addEventListener('change', ({ target }) => {
  snapVSCode.font.family = target.value
  snapVSCode.setFontFeatureSettings(app.checkbox.ligatures)
  snapVSCode.render()
})

window.addEventListener('load', () => snapVSCode.render())

app.input.title.addEventListener('input', ({ target })=>{
  snapVSCode.render()
})

app.input.by.addEventListener('input', (e)=>{
  by = e.target.value
  localStorage.setItem('by',by)
  snapVSCode.render()
});

app.input.background.addEventListener('keyup', (e) => {
  if(e.key === 'Enter'){ 
    localStorage.setItem('background', e.target.value)
    images.background.src = e.target.value
    images.background.onload = () => snapVSCode.render();
  }
});

app.select.IconNetwork.addEventListener('change', (e)=>{
  images.iconNetwork.src = `icon/${e.target.value}.svg`
  localStorage.setItem('iconNetwork', e.target.value )
  images.iconNetwork.onload = () => snapVSCode.render();
});

app.checkbox.italic.addEventListener('click', () => snapVSCode.render())

app.button.remove.addEventListener('click', () => {
  localStorage.removeItem('html')
  snapVSCode.render()
})

app.checkbox.fondo.addEventListener('change', ({ target }) => {
  snapVSCode.render()
})




