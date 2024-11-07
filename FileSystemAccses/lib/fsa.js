class FileManager {
	constructor(file) {
		this.file = file;
	}
	async readAsText() {
		const file = await this.file.getFile();

		const content = await file.text();
		console.log(content)
		return content;

	}
	async writeText(text) {
		const writable = await this.file.createWritable();
		await writable.write(text);
		await writable.close();
	}
}
async function showFilePicker() {
	const res = await window.showOpenFilePicker();
	let data = [];
	for (const file of res) {
		data.push(new FileManager(file));
	}
	return data;
}


export {FileManager,showFilePicker}