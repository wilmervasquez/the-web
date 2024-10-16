const META = [
  {
    charset: "UTF-8",
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  },
];

const fragment = document.createDocumentFragment();

const META_ELEMENTS = META.map(c=>{
  
  const meta = document.createElement("meta");
  for (const key in c) {
    meta.setAttribute(key, c[key])
  }
  fragment.appendChild(meta);
})

const CSS = ['../lib/style/base.css'].forEach(link=>{
  const linkElement = document.createElement("link");
  linkElement.setAttribute('href',link)
  linkElement.setAttribute('rel','stylesheet')
  fragment.appendChild(linkElement);

})

document.head.prepend(fragment)