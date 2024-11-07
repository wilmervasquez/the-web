import { MLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const app = {
	progress: document.getElementById("progress")
}
const selectedModel = "Llama-3-8B-Instruct-q4f32_1-MLC";

const engine = new MLCEngine();
engine.setInitProgressCallback((e)=>{
	console.log(e)
	app.progress.textContent = `${e.text} ${ e.progress * 100 }%`
});

await engine.reload(selectedModel);

const messages = [
	{ role: "system", content: "Traduce lo que te pasen al inglés" },
	{ role: "user", content: "¡Hola! ¿Cómo estás?" },
];

const reply = await engine.chat.completions.create({ messages });

console.log(reply.choices[0].message);