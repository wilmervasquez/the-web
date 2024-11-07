import { codeToHtml, createHighlighter, createHighlighterCore } from "shiki"

const Indice = {
	struct: '<h1>Indice</h1>',

}
function Head(text,icon = ''){
	Indice.struct += `<div style="padding-left: 0px">${icon} <a href="#${text}">${text}</a></div>`
	return `<h1 id="${text}">${icon} ${text}</h1>`
}
function Head2(text,icon = ''){
	Indice.struct += `<div style="padding-left: 24px">${icon} <a href="#${text}">${text}</a></div>`

	return `<h2 id="${text}">${icon} ${text}</h2>`
}
function H3(text,icon = ''){
	Indice.struct += `<div style="padding-left: 48px">${icon} <a href="#${text}">${text}</a></div>`

	return `<h3 id="${text}">${icon} ${text}</h3>`
}
function P(text,icon = ''){
	return `<p>${icon} ${text}</p>`
}
async function T(text,icon = ''){
	text = text.trim()
	const html = await codeToHtml(''+text, {
		lang: "sh",
		theme: "one-light",

	})
	return `<div class="term flex items-center font-mono">~/${html}</div>`
}


async function Code(text,{icon = '', lang = "javascript"} = {}){
	text = text.trim()
	const html = await codeToHtml(text, {
		lang,
		theme: "one-light",

	})
	return `<code class="code">${html}</code>`
}
function Path(text,icon = ''){
	return `<p class="flex items-center">
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#333333" d="M3.5 6.25V8h4.629a.75.75 0 0 0 .53-.22l1.53-1.53l-1.53-1.53a.75.75 0 0 0-.53-.22H5.25A1.75 1.75 0 0 0 3.5 6.25m-1.5 0A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659L11.562 5.5h7.189A3.25 3.25 0 0 1 22 8.75v9A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM3.5 9.5v8.25c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9A1.75 1.75 0 0 0 18.75 7h-7.19L9.72 8.841a2.25 2.25 0 0 1-1.591.659z"/></svg>
		${icon} ${text}
	</p>`
}

function Table(head,body){
	return `
<table>
	<thead>
		${['user','sataus'].map(m=>`<th>${m}</th>`).join('')}
	</thead>
	<tbody>
		${body.map(m=>`<tr>
			<td>
			<div class="user">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="24" viewBox="0 0 20 20"><path fill="#65a30d" d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18h.05a2.5 2.5 0 0 1-.05-.5V17c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.49a2.5 2.5 0 0 1 1.543-.958L11.05 11zm7.991.5v.5h-.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5H17v-.5a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5m1.5-.5h2a.5.5 0 0 1 .5.5v.5h-3v-.5a.5.5 0 0 1 .5-.5"/></svg>Miguel suarez Ramiro</td>
				<div>
			<td><div class="chip"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#4f46e5" d="M8.957 2.076a6 6 0 0 0-1.914 0a.66.66 0 0 0-.543.668c0 .494.493.841.984.785a4.6 4.6 0 0 1 1.032 0c.49.056.984-.291.984-.785a.66.66 0 0 0-.543-.668M8.516 12.47a4.6 4.6 0 0 1-1.032 0c-.49-.056-.984.291-.984.785c0 .327.22.616.543.668a6 6 0 0 0 1.914 0a.66.66 0 0 0 .543-.668c0-.494-.493-.841-.984-.785m1.984-.292c0-.273.14-.524.351-.697q.346-.285.631-.631a.91.91 0 0 1 .697-.351c.597 0 .983.617.625 1.095a6 6 0 0 1-1.21 1.21c-.477.357-1.094-.029-1.094-.626m0-8.358c0-.597.617-.983 1.095-.625q.21.158.405.332V2.75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.604a4.5 4.5 0 0 0-.503-.482a.91.91 0 0 1-.351-.697m-7.304.584c-.358.478.028 1.095.625 1.095c.273 0 .524-.14.697-.351q.285-.346.631-.63A.91.91 0 0 0 5.5 3.82c0-.597-.617-.983-1.095-.625a6 6 0 0 0-1.21 1.21m-1.12 2.638a.66.66 0 0 1 .668-.543c.494 0 .841.493.785.984a4.6 4.6 0 0 0 0 1.032c.056.49-.291.984-.785.984a.66.66 0 0 1-.668-.543a6 6 0 0 1 0-1.914m1.12 4.552c-.358-.478.028-1.095.625-1.095c.273 0 .524.14.697.351q.285.347.631.63a.91.91 0 0 1 .351.698c0 .597-.617.983-1.095.625a6 6 0 0 1-1.21-1.21m10.728-2.638a.66.66 0 0 1-.668.543h-.126c-.432 0-.736-.431-.675-.86a.75.75 0 0 1 1.485.212z"/></svg>En curso</div></td>
			<td></td>
			<td></td>

			</tr>`).join('')}}
	</tbody>
</table>
<table>
	<thead>
		${head.map(m=>`<th>${m}</th>`).join('')}
	</thead>
	<tbody>
		${body.map(m=>`<tr>${m.map(n=>`<td>${n}</td>`)}</tr>`).join('')}}
	</tbody>
</table>
	`
}

function Task(t,state = false){
	return `
	<div>
	${state ? `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#65a30d" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm11.03 6.28l-6.754 6.747a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216l6.223-6.217a.75.75 0 1 1 1.06 1.062"/></svg>` :
	`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#aaa" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 5C5.56 5 5 5.56 5 6.25v11.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V6.25C19 5.56 18.44 5 17.75 5z"/></svg>`}
	${t}
	</div>
	`
}
function Div(c,id) {
	return `<div class="${id}">${c}</div>`
}
function Portada(t,state = false){
	return Div(`
	<img src="https://i.pinimg.com/736x/90/88/a4/9088a4919e2f2853984a633934a7be0b.jpg">
	<img src="https://i.pinimg.com/736x/70/98/3a/70983a6bcb6b160ce87c17e8d4127f37--date-night-dresses-summer-dresses.jpg">
	<img src="">
	<img src="">
	<img src="">
	<img src="">
	<img src="">
	<img src="">
	<img src="">
	<img src="">
	<img src="">
	`,'portada')
}

function By(icon,text){

}
export {
	Head,Head2,P,T,H3,Code,Path, Indice, Table,Task,Portada
}