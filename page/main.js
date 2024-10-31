class Project {
  constructor(name, url) {
    this.name = name
    this.url = url
  }
}

const projects = [
  new Project('Image to Base64','image-to-base64'),
  new Project('Amazing','amazing'),
  new Project('Sheets','sheets'),
  new Project('Calculator','calculator'),
  new Project('Format File','e'),
  new Project('Extract Colors Text','extract-colors-text'),
  new Project('Snap Code','snapcode'),
]

const app = {
  projects: document.querySelector('.proyects')
}

const $projects = document.createDocumentFragment()

app.projects.innerHTML = projects.map(({name, url}) => {
  return `
    <article class="proyect" style="rotate: ${Math.random()*20 - 10}deg">
      <div class="fondo">
        <img src="" class="" id=""/>
      </div>
      <div class="foot">
        <a class="name" href="${url}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><path fill="#65a30d" d="M0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v16h192V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-16H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-1.7.1-3.4.3-5L144 224H48c-26.5 0-48-21.5-48-48z"/></svg>
          ${name}
        </a>
        <div class="description"></div>
      </div>
    </article>
  `;
}).join('')