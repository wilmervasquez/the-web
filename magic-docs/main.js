import { Icons } from "./src/lib/icons.js";
import "./style.css";

import { Head, Head2 as H2, P, T, H3, Path, Code, Indice, Table, Task, Portada } from "./src/lib/widgets.js";

const doc = document.getElementById("doc");

let h = [
	Portada(),
	Head("Introduccion a Javascript", Icons.dol),
	H2("Lavar la ropa", Icons.cloudCube),
	Task("  Cocinar", true),
	Task("Planchar", true),
	Task("Historia", true),
	Task("Historia", ),
	Task("Historia", true),
	Task("Historia", true),
	Task("Historia", true),
	Task("Historia", true),
	Task("Historia", true),
	P(
		"Las caracteristicas mas redicentes nos permiten dar los siguientes pasos amigos"
	),
	Table(['Operator','Name','Example','Some as'],[
		['=','Assignment','a = 5','a = b'],
		['+=','Assignment','a = 5','a = b'],
		['-=','Assignment','a = 5','a = b'],
		['*=','Assignment','a = 5','a = b'],
		['/=','Assignment','a = 5','a = b'],
		['%=','Assignment','a = 5','a = b'],
		['**=','Assignment','a = 5','a = b'],
		['&=','Assignment','a = 5','a = b'],
		['|=','Assignment','a = 5','a = b'],
		['??=','Assignment','a = 5','a = b'],
	]),
	H3("Fundamentos", Icons.lik),
	H2("Partial", Icons.lik),
	H3(".setBackground()", Icons.cubeLine),
	P(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa, quis consequatur eius tempore tempora laudantium numquam cum omnis maiores adipisci doloremque quia exercitationem modi aperiam aut aliquam sequi nihil."
	),
	await Code(`import { Icons } from "./icons.js";
import {
	Head,
	Head2 as H2,
	P,
	T ,
	H3,
	Path,
	Code
} from "./widget.js";
// magic
const doc = document.getElementById("doc");
`),
	H3(".at()", Icons.cubeLine),
	H2("Variables", Icons.beaker),
	P('Las variables nos permiten almacernas datos'),
	await Code(`
var age = 12
var name = "John"
var price 12.00 // float
var fruits = ['magos']
var person = { name: 'carlos', age: 89}
		`),
	P("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa, quis consequatur eius tempore tempora laudantium numquam cum omnis maiores adipisci doloremque quia exercitationem modi aperiam aut aliquam sequi nihil."),
	await T("npm i -g peggt"),
	H3(".map()", Icons.cubeLine),
	H3(".cartoom()", Icons.cubeLine),
	H3("Partial", Icons.lik),
	await Code(`
function user() { }
		`),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H2("Arrays Methods", Icons.beaker),
	H3("Operator in", Icons.beaker),
	await Code(`
const fruits = ['apple', 'banana', 'orange']
0 in fruits // true
1 in fruits // true
4 in fruits // false
'length' in fruits // true
`),
	P('El operador in devuelve true si la propiedad especificada está en el objeto. En el ejemplo anterior debemos especificar el índice del arreglo, NO el valor. '),
	P('"Length" es una propiedad de los arreglos por eso devuelve true. Este operador es usado en el bucle: for in...'),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	Path("src/main.js"),


	await Code(`const doc = document.getElementById("doc");`),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),

	H3(".at()", Icons.cubeLine),
	await Code(`
interface Person {
		age: number
}
function name(x:numer) {
	// body
}

const has = function() {

}

const liked = () => {

}

`,'typescript'),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
	H3(".at", Icons.cubeLine),
]
h.unshift()

doc.innerHTML = h.join("");