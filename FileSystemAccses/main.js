import { showFilePicker } from "./lib/fsa.js";

async function main(){
	let file ;
	const btn = document.querySelector("#open");
	const textarea = document.querySelector("textarea");
	const save = document.querySelector("#save");
	btn?.addEventListener('click', async() => {

		[file] = await showFilePicker();
		textarea.value = await file.readAsText()
	})


	save?.addEventListener('click', async() => {
		await file.writeText(textarea.value)
	})


}
main()