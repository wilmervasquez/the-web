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

const snapVSCode = new VSCodeSnapCode(canvas, ctx, app);

app.input.background.value = snapVSCode.getLocal('background.url') ?? ''
app.select.IconNetwork.value = snapVSCode.getLocal('icon.network') ?? 'instagram'
app.input.title.value = snapVSCode.getLocal('fileName') ?? 'main.js'
app.input.by.value = snapVSCode.getLocal('by') ?? ''
app.input.lang.value = snapVSCode.getLocal('languaje') ?? "txt";
app.select.FontFamily.value = snapVSCode.font.family

app.checkbox.fondo.addEventListener('change', () => snapVSCode.render)

app.input.lang.addEventListener('input', ({ target }) => {
  snapVSCode.saveLocal('languaje', target.value)
  snapVSCode.render()
});


const config = {
  borderRadius: 30,
  fontFeatureSettings: fontFeatureSettings.CascadiaCode
}


app.checkbox.ligatures.checked =  Boolean(Number(localStorage.getItem('font-ligatures') ?? '1'))
canvas.style.fontFeatureSettings = app.checkbox.ligatures.checked ? config.fontFeatureSettings : "normal";

app.checkbox.ligatures.addEventListener('click', ({target}) => {
  snapVSCode.setFontFeatureSettings(target.checked)
  snapVSCode.render()
})


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
  snapVSCode.font.family = target.value;
  snapVSCode.setFontFeatureSettings(app.checkbox.ligatures);
  snapVSCode.saveLocal('font.family', target.value)
  snapVSCode.render();
})

window.addEventListener('load', () => snapVSCode.render())

app.input.title.addEventListener('input', ({ target })=>{
  snapVSCode.saveLocal('fileName', target.value)
  snapVSCode.render()
})

app.input.by.addEventListener('input', ({ target }) => {
  snapVSCode.saveLocal('by', target.value)
  snapVSCode.render()
});

app.input.background.addEventListener('keyup', ({ key, target }) => {
  if(key === 'Enter'){ 
    snapVSCode.saveLocal('background.url', target.value)
    images.background.src = target.value
    images.background.onload = () => snapVSCode.render();
  }
});

app.select.IconNetwork.addEventListener('change', ({ target })=>{
  images.iconNetwork.src = `icon/${target.value}.svg`
  snapVSCode.saveLocal('icon.network', target.value )
  images.iconNetwork.onload = () => snapVSCode.render();
});

app.checkbox.italic.addEventListener('click', () => snapVSCode.render())

app.button.remove.addEventListener('click', () => {
  localStorage.removeItem('snapcode.xml')
  snapVSCode.render() // [1111111]
})

app.checkbox.fondo.addEventListener('change', ({ target }) => {
  snapVSCode.render()
})




