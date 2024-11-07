import { Icons } from "./icons.js";
import { Head, Head2 as H2, P, T ,H3, Path,Code} from "./widget.js";

const doc = document.getElementById("doc");

doc.innerHTML =[
	Head('Javascript', Icons.dol),
	H2('Historia', Icons.cloudCube),
	P('Las caracteristicas mas redicentes nos permiten dar los siguientes pasos amigos'),
	H3('Fundamentos', Icons.lik),
	H2('Partial', Icons.lik),
	H3('.setBackground()', Icons.cubeLine),
	P('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa, quis consequatur eius tempore tempora laudantium numquam cum omnis maiores adipisci doloremque quia exercitationem modi aperiam aut aliquam sequi nihil.'),
	H3('.at()', Icons.cubeLine),
	H2('Variables', Icons.beaker),
	T('npm i -g peggt'),
	P('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa, quis consequatur eius tempore tempora laudantium numquam cum omnis maiores adipisci doloremque quia exercitationem modi aperiam aut aliquam sequi nihil.'),
	H3('.map()', Icons.cubeLine),
	H3('.cartoom()', Icons.cubeLine),
	H3('Partial', Icons.lik),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	Path('src/main.js'),
	Code(`import { Icons } from "./icons.js";
import {
	Head,
	Head2 as H2,
	P,
	T ,
	H3,
	Path,
	Code
} from "./widget.js";

const doc = document.getElementById("doc");`),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),
	H3('.at', Icons.cubeLine),

].join('')