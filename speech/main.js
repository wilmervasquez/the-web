const $app = {
	input: {
		title: document.getElementById("title"),
	},
	select: {
		voces: document.getElementById('voces')
	},
	checkbox: {

	},
	button: {
		play: document.querySelector("button.play") ,
		stop: document.querySelector("button.pause"),
		cargar: document.querySelector("button.load")
	}
}
let title = ''
let selectIndex = 0
let voicesAvailable = []
$app.input.title.addEventListener('input', ({target})=>{
	title = target.value
})
let utterance = null
const synth = window.speechSynthesis;

function loadVoices() {
	voicesAvailable = synth.getVoices()
	console.log(voicesAvailable)

	$app.select.voces.innerHTML = voicesAvailable.map((v,i)=>`<option value="${i}">${v.name}</option>`).join('')
}



function speak() {
	if (synth.speaking) {
		synth.cancel()
	}

	utterance = new SpeechSynthesisUtterance(title)
	console.log($app.select.voces)
	utterance.voice = voicesAvailable[7]

	utterance.rate = 1
	utterance.pitch = 0.7

	synth.speak(utterance)
}

$app.button.play.addEventListener('click', () => speak())
$app.button.stop.addEventListener('click', () => {
	synth.cancel()
})

window.addEventListener('load', ()=> {
	loadVoices()
})
$app.select.voces.addEventListener('change', ({target}) => {
	selectIndex = Number(target.value)
})


