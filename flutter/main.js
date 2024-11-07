// @ts-nocheck
import { Column, Row } from "./flutter/layout.js";

function App() {
	return Row({
		padding: 12,
		boxShadow: [0, 0, 12, Color.red],
		gap: 12,
		alignItems: "center",
		childs: [
			Img({ src: "/main.png", width: 12, height: 12, borderRadius: 10 }),
			Column({
				gap: 2,
				childs: [
					Text({ value: "Animals", paddingLeft: 12 }),
					VSCode({
						alignItems: "center",
						gap: 2,
						childs: [
							Text({ value: "Animals", fontSize: 14 }),
							Text({ value: "." }),
							Text({ value: "Animals" }),
						],
					}),
					Row({
						childs: [
							Row({
								childs: [Img({ src: "/" }), Text({ value: 123 })],
							}),
							Row({
								childs: [Img({ src: "/" }), Text({ value: 123 })],
							}),
						],
					}),
				],
			}),
		],
	});
}

document.body.appendChild(App());