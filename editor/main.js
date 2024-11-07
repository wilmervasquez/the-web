let code = `
const name = signal.rename()
<luikio>
<macrometros>
function name() {
	for(let i = 0; i < 10; i++) {
		while(true) {

		}
		}
	}
}
`
let macthb = /[a-zA-Z]+|[0-9]+|\+{2}|\s+|./g
class Editor {
	constructor(parent) {
		this.parent = parent;
		this.editor = document.createElement('code');
		this.editor.classList.add('editor');
		this.parent.appendChild(this.editor)

		this.editor.addEventListener('click', (e) => {

			this.tokenActive = e.target.closest('.token')
			if (this.tokenActive) {
				this.tokenActive.setAttribute('contenteditable', 'true')
				this.tokenActive.appendChild(this.suggest)
				this.suggest.innerHTML = data.filter((m=>m.includes(this.tokenActive.dataset.text))).map(l=>`<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="hsl(270,100%,70%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7l8.7 5l8.7-5M12 22V12"/></g></svg>${l}</li>`).join('')
			}


		})

		this.tokenActive = null;

		this.suggest = document.createElement("ul");
		this.suggest.classList.add('suggest');
		let data = ['map','macro','lucre','litio','filter','func','() {}','rename']
		this.editor.appendChild(this.suggest)
		this.suggest.addEventListener('click', (e) => {
			let li = e.target.closest('li')
			if (li) {
				if (this.tokenActive) {
					this.tokenActive.textContent = li.textContent
				}
			}
		})
	}
	setValue(textContent) {
		textContent = textContent.split('\n');

		textContent = textContent.map(line => {

			let result;
			let re = []
			while (result = macthb.exec(line)) {
				re.push(result[0])
			}
			return re
		})

		let fragment = document.createDocumentFragment();

		textContent.forEach((line,i)=> {
			let spanLine = document.createElement('div');
			spanLine.classList.add('line');
			spanLine.style.top = `${i * 20}px`;
			for(let token of line) {
				let spanToken = document.createElement('span');
				spanToken.classList.add('token');
				spanToken.dataset.text = token

				let tokenText = document.createElement("span");
				tokenText.classList.add('token-text');
				tokenText.textContent = token;

				spanToken.appendChild(tokenText)
				spanLine.appendChild(spanToken);
			}
			fragment.appendChild(spanLine);
		})

		this.editor.appendChild(fragment);
	};
}

const editor = new Editor(document.querySelector('.container'))

editor.setValue(code)