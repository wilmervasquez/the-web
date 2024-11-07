import { tmpl } from "../lib/script/doc.js";
import { CanvasDraw } from "../lib/script/canvas.js";

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
const draw = new CanvasDraw(canvas, 100,100);

function render(v) {
	draw.clear()
	draw.ejes(120,56)
}
render()
const slider = document.querySelector(".slider");
const input = document.querySelector("input");
const outResult = document.querySelector(".result");
const tabs = document.querySelector(".tabs");
const form = document.querySelector("form");
const syntax = document.querySelector(".syntax");
const history = JSON.parse(localStorage.getItem("his") ?? "[]");


console.log(history);
for (let i = 0; i < history.length; i++) {
	tabs.append(tmpl("tab"));
}
input.addEventListener("input", ({ target }) => {
	let value = target.value.trim();
	render(value);
	const resultHTML = value.replaceAll(/[A-Za-z]+|[0-9]+|[\+\-()]|./g, (w) => {
		if (/[A-Za-z]/.test(w)) {
			return `<span class="text">${w}</span>`;
		}
		if (/[0-9]/.test(w)) {
			return `<span class="number">${w}</span>`;
		}
		if (/[+-/*%]/.test(w)) {
			return `<span class="operator">${w}</span>`;
		}
		if (/\(|\)/.test(w)) return `<span class="braces">${w}</span>`;
		if (/\(|\)/.test(w)) return `<span class="sign">${w}</span>`;
		return `<span class="other">${w}</span>`;
	});
	console.log(resultHTML);

	if (value.length > 0) {
		syntax.innerHTML = resultHTML;
	} else {
		syntax.innerHTML = "&nbsp;";
	}

	try {
		const output = eval(`
			const sqrt = x => Math.sqrt(x);
			const sen = x => Math.sen(x*180);
			const {PI,cos,tan,acos,abs} = Math;

			${target.value}
		`);
		form.classList.remove("error");

		console.log(typeof output);
		if (typeof output == "string" || typeof output == "number") {
			outResult.textContent = output;
		} else {
			outResult.textContent = "";
		}
	} catch (error) {
		form.classList.add("error");
		console.log(error);
	}
});