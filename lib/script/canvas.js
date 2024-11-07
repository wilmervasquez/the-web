class CanvasDraw {
	constructor(canvas, width, heigth) {
		this.canvas = canvas
		this.ctx = this.canvas.getContext('2d');
	}
	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	line(x, y, x2, y2) {
		this.ctx.beginPath();
		this.ctx.moveTo(x, y);
		this.ctx.lineTo(x2, y2);
		return this.ctx;
	}

	ejes(x, y) {
		this.line(0, y,this.canvas.width, y).stroke();
		this.line(x, 0,x, this.canvas.height).stroke();


		for (let i = 1; i * 20 < this.canvas.width; i++) {
			this.ctx.fillText(i, i*20+x, y+20);
		}
		for (let i = 1; i * 20 > 0; i--) {
			this.ctx.fillText(i, i*20+x, y+20);
		}
		for (let i = 1; i * 20 < this.canvas.width; i++) {
			this.ctx.fillText(i, i*20+x, y+20);
		}
		for (let i = 1; i * 20 < this.canvas.width; i++) {
			this.ctx.fillText(i, i*20+x, y+20);
		}

	}
}

export { CanvasDraw }