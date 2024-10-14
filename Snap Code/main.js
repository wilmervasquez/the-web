const snapCode = document.querySelector(".snap-code");
const code = document.querySelector(".code");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const ZOOM = 3;
function drawRoundedRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
  ctx.fill();
}
function drawRoundedStroke(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
  ctx.stroke();
}
function circle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color; // Color de relleno
  ctx.fill();
}
function draw() {
  let padding = 14 * ZOOM;
  const bgColor = getComputedStyle(document.querySelector('code > div')).backgroundColor
  snapCode.style.background = bgColor

  const codeRect = code.getBoundingClientRect();
  // const [cx,cy] = [codeRect.left+window.scrollX,codeRect.top+window.scrollY]

  canvas.height = codeRect.height * ZOOM + 210;
  const its = code.querySelectorAll("div > div, div > br");

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0,0,0,.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = bgColor;
  ctx.shadowColor = "rgba(0, 0, 0, .6)";
  ctx.shadowBlur = padding;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  drawRoundedRect(
    padding,
    padding,
    canvas.width - padding * 2,
    canvas.height - padding * 2,
    12 * ZOOM
  );
  ctx.strokeStyle = "rgba(255,255,255,.2)";
  ctx.lineWidth = 2;
  drawRoundedStroke(
    padding+1,
    padding+1,
    canvas.width - (padding * 2)-2,
    canvas.height - (padding * 2) -2,
    11 * ZOOM
  );

  ctx.shadowBlur = 0;

  // circle
  circle(padding + 60, 100, 16, "#E94F5B");
  circle(padding + 120, 100, 16, "#F1BA2C");
  circle(padding + 180, 100, 16, "#40BA4D");

  const cod = { x: padding + 170, y: padding + 100 };
  ctx.textBaseline = "top";
  its.forEach((row, i) => {
    let rowRect = row.getBoundingClientRect();

    // line Numbers
    ctx.textAlign = "right";
    ctx.font = `42px Cascadia Code`;
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.fillText(
      i+1,
      padding + 105,
      (rowRect.top - codeRect.top) * ZOOM + padding + 105
    );

    row = row.querySelectorAll("span");

    ctx.textAlign = "left";

    if (row[0] !== undefined && /\s/.test(row[0].textContent)) {
      let r = ctx.measureText("fm").width;
      let text = row[0].textContent;
      let gj = text.match(/\s/g);
      ctx.fillStyle = "rgba(255,255,255,.1)";

      for (let j = 0, k = 0; j < gj.length; j += 2) {
        ctx.fillRect(
          cod.x + r * k,
          (rowRect.top - codeRect.top) * 3 + 145,
          3,
          58
        );
        k++;
      }
    }

    row.forEach((span, i) => {
      ctx.textAlign = "left";

      let fg = getComputedStyle(span);

      ctx.font = `${fg.fontWeight} ${fg.fontStyle} 42px Cascadia Code`;

      let spanRect = span.getBoundingClientRect();
      // console.log(clientRect)

      // if (['rgb(97, 175, 239)'].includes(fg.color)) {
      //   ctx.shadowBlur = 10
      //   ctx.shadowColor = '#000'
      // } else {
      //   ctx.shadowBlur = 0
      // }

      ctx.fillStyle = "rgba(255,255,255,.03)";
      ctx.fillText(
        span.textContent.replaceAll(/\s/g, "•"),
        (spanRect.left - codeRect.left) * ZOOM + cod.x,
        (spanRect.top - codeRect.top) * ZOOM + cod.y
      );

      ctx.fillStyle = fg.color;
      ctx.fillText(
        span.textContent,
        (spanRect.left - codeRect.left) * ZOOM + cod.x,
        (spanRect.top - codeRect.top) * ZOOM + cod.y
      );
    });
  });
}

draw();

const btnPaste = document.querySelector(".btn-paste");
btnPaste.addEventListener("click", async () => {
  const clipboardItems = await navigator.clipboard.read();

  for (const clipboardItem of clipboardItems) {
    if (clipboardItem.types.includes("text/html")) {
      const htmlBlob = await clipboardItem.getType("text/html");
      const htmlText = await htmlBlob.text();

      code.innerHTML = htmlText;
      console.log(htmlText);
    }
  }
  setTimeout(() => {
    draw();
  }, 100);
});
