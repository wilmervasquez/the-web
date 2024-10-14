const META = [
  {
    charset: "UTF-8",
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  },
];

const CSS = ['../lib/style/base.css'].forEach(link=>{
  const linkElement = document.createElement("link");
  linkElement.setAttribute('href',link)
  linkElement.setAttribute('rel','stylesheet')
  document.head.appendChild(linkElement);

})
const META_ELEMENTS = META.map(c=>{

  const meta = document.createElement("meta");
  for (const key in c) {
    meta.setAttribute(key, c[key])
  }
  document.head.appendChild(meta);
})