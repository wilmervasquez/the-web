// 1. Loading Data from an API
fetch("http://api.com/users")
	.then((response = response.json()))
	.then((data) => console.log(data))
	.catch((err) => console.log("Failed to Load data", err));

// 2. User Authentication
// Use CaseSimulate user login, resolving on success and rejecting on failure.
function loginiser(email, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if ((email === "user@example.com") && (password === "password123")) {
				resolve({ userId1, profile: "User Profile" });
			} else {
				reject(new Error("Authentication failed"));
			}
		}, 1000);
	});
}

// Paste to code from VSCode

Math.random(); // Genera un numero random de 0 a 1
Math.PI(); // 3.14
Math.cos((deg * 12) / 14);
Math.log();
Math.sin();
Array.map((m) => er); // ['mactyy', 'ert', '1233']



const red = document.getElementById("red-circle");

const redAnimation = red.animate(
	[
		{ transform: "translateX(-6em)" },
		{ transform: "translateY(-6em)" },
		{ opacity: 0.4 },
		{ transform: "scale(1.5)" }
	],
	{
		duration1000,
		iterationsInfinity,
		direction: "alternate",
		easing: "ease-in-out"
	}
);

redAnimation.play();

// ❌ No hagas esto, es muy costoso
window.addEventListener('resize', () => {
	if (window.innerWidth > 720) {
		// to code
	}
})

// ✅ Usa la API de media queries
const desktopMediaQuery = window.matchMedia('(min-width:720px)');

desktopMediaQuery.addEventListener('change', (event) => {
	if (event.matches) {
		// to code
	}
})

async function getBatteryInfo() {
	const battery = await navigator.getBattery();
	console.log("Battery level" + battery.level)
	console.log("Charging?" + battery.charging)
}

let str = "1 pavo cuesta 30€";

str.match(/\d+(?=€)/) // 30

// ❌ Mal hecho:
const yyyymmdstr = moment().format('YYYY/MM/DD');

// ✅ Bien hecho:
const fechaActual = moment().format('YYYY/MM/DD');

const ubicaciones = ['Austin', 'New York', 'San Francisco'];
ubicaciones.forEach((ubicacion) => {
	hazUnaCosa();
	hazMasCosas()
	ejecuta(ubicacion);
});


// Metod array jaavscript

// 🚩 Add and Delete
[1, 2, 3].push(4) // [1, 2, 3, 4]
[1, 2, 3].pop() // [1, 2]
[1, 2, 3].unshift(0) // [0, 1, 2, 3]
[1, 2, 3].shift() // [2, 3]

// 🧩 Extension
['a', 'b'].concat('c') // ['a', 'b', 'c']
['a', 'b', 'c'].join('-') // 'a-b-c'
['a', 'b', 'c'].slice(1) // ['a', 'b]
['a', 'b', 'c'].indexOf('b') // 1
['a', 'b', 'a'].lastIndexOf('a') // 2
;['a', 'b', 'c'].includes('c') // true
[3, 5, 6, 8].find((n) => n % 2 === 0) // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0) // 2
[10, 20, 30, 40].findLast((n) => n > 30) // 40
[10, 20, 30, 40].findLastIndex((n) => n > 30) // 3
[3, 4, 8, 6].map((n) => n * 2) // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0) // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur) // 16
[2, 3, 4, 5].every((x) => x < 6) // true
[3, 5, 6, 8].some((n) => n > 6) // true
[1, 2, 3, 4].reverse() // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2) // 7
[[1,2],3].flat() // [1, 2, 3]
[4,1,2,5,6].toSorted() // [1, 2, 4, 5, 6] ⚠️ No modifica el array orginal
[4,1,2,5,6].sort() // [1, 2, 4, 5, 6]
[1, 2, 3, 4].with(-2, 12) // [1, 2, 12, 4]
copyWithin()
entries()
['🍎', '🍒', '🥦', '🍆'].fill('🍄') // ['🍄', '🍄', '🍄', '🍄']
['🍎', '🍒', '🥦', '🍆'].fill('📒', 1) // ['🍎', '📒', '📒', '📒']
['🍎', '🍒', '🥦', '🍆'].fill('🚩', 2, 4) // ['🍎', '🍒', '🚩', '🚩']
flatMap()
['a','e'].forEach((v,i) => console.log(v,i)) // 'a 0, b 1
keys()
reduceRight()
splice()
toReversed()
toSpliced()
[3, 6, 9].toLocaleString() // '3,6,9'
[3, 6, 9].toString() // '3,6,9'

// JavaScript ES6 numbers
Number.isInteger(7) // true
Number.isInteger(3.2) // false

Number.isFinite (10 / 1) // true
Number.isFinite(10 / 0) // false

Number.isNaN("javascript_coding") // true
Number.isNaN(8) // false

const r = /\d+/;

const largoElemento = [ 'E 99', 'E 1001', 'E 5', 'E 30', 'E 465']

const ordenado = largoElemento.sort((a, b) => {
	return a.match(r) - b.match(r)
})

console.log(ordenado)
// ['E 5', 'E 30', 'E 99', 'E 465', 'E 1001'