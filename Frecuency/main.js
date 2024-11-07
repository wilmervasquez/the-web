const btn = document.querySelector("button");
btn.addEventListener('click', start);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const { width, height } = canvas;



async function start() {
	const audioContext = new AudioContext();

	try {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		btn.textContent = "stop";

		const source = audioContext.createMediaStreamSource(stream);
		const analyser = audioContext.createAnalyser();
		source.connect(analyser);

		analyser.fftSize = Math.pow(2, 10);
		const bufferLenght = analyser.frequencyBinCount;
		console.log(bufferLenght);
		const dataArray = new Uint8Array(bufferLenght);

		let alt = 0;
		function draw() {
			// ctx.clearRect(0, 0, width, height);
			analyser.getByteFrequencyData(dataArray);
			const dataHz = Object.entries(dataArray).map(a => [Number(a[0]),a[1]]);
			// --------------- @start -------------------
			// let mayores = dataHz.sort((a,b)=> a[1] - b[1]);
			// mayores = mayores.filter((a)=> a[1] > 0);
			// --------------- @end -------------------

			let major = []
			for (let i = 0; i < dataHz.length; i += 1) {
				const frecuency = dataHz[i][0];
				const intensidad = dataHz[i][1];

				const intensidadAnterior = dataHz[i-1] ? dataHz[i-1][1]:0;
				const intensidadSiguiente = dataHz[i+1] ? dataHz[i+1][1]:0;

				ctx.fillStyle = `hsl(${360-intensidad},100%,50%)`;
				ctx.fillRect(frecuency * 1, alt, 1, 1)

				// if ((intensidadAnterior<=intensidad) && (intensidad>=intensidadSiguiente) && (intensidad!=0)) {
				//   ctx.fillStyle = `white`;
				//   ctx.fillText(`${intensidad}\n${frecuency} Hz`, frecuency * 5,10+ intensidad);
				//   major.push(dataHz[i])
				// }

			}
			alt+=1
			if (alt > canvas?.height) {
				alt=0
			}
			// major = major.map(([fre,int])=>{
			//   let d = hzToNotaMusical(fre)
			//   if (d == null) return null;
			//   return [fre,int,d];
			// })
			// major = major.filter((m)=> m !== null)
			// major.sort((a,b)=>a[1]-b[1])
			// major.reverse()
			// major = major.slice(0,4)
			// major = major.map(([_,__,n])=>n)


			// console.log(major);
			requestAnimationFrame(draw);
		}
		// setInterval(draw, 100);
		draw();
	} catch (error) {
		console.error(error);
	}
}