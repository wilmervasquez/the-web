import { Color } from "../../lib/script/color.js";
import { Draw } from "./canvas.js";
import { fontFeatureSettings, images } from "./util.js";

class TokenText {
  constructor(tc, fs, fw, c) {
      this.textContent = tc
      this.fontStyle = fs
      this.fontWeight = fw
      this.color = c
  }
}

class SnapCode {
  constructor(canvas, ctx, app) {
    this.app = app;
    this.ctx = ctx;
    this.canvas = canvas;
    this.xml = document.createElement("code");
    this.fileName = "asyncy";

    this.drw = new Draw(canvas, ctx);

    this.font = {
      family: this.getLocal("font.family") ?? "Cascadia Code",
      size: 42,
    };

    this.setFontFeatureSettings(this.font.family);
    this.padding = 30;
    this.lineHeight = 1.4 * this.font.size;
    this.paddingLineNumbers = 65;

    this.comment = {
      match: /\/\/ /,
      replace: "» ",
      startsWith: "//",
    };

    this.paddingLineNumbers = 65;

    this.borderRadius = 30;

    this.setXML(
      this.getLocal("xml") ?? `<div style="color: #abb2bf;background-color: #282c34;font-family: Cascadia Code, MonoLisa, Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: hsl(${Math.random() * 360
        },100%,70%);font-style: italic;">Paste your code from VSCode</span></div></div>`
    );
    this.heightCode = this.rows.length * this.lineHeight;
  }
  saveLocal(key, text) {
    localStorage.setItem(`snapcode.${key}`, text)
  }
  getLocal(key, text) {
    return localStorage.getItem(`snapcode.${key}`)
  }
  setXML(xml) {
    this.xml.innerHTML = xml;
    this.saveLocal('xml', xml)

    this.bgColor = this.xml.firstElementChild.style.backgroundColor;

    this.isDark = this.bgColor.match(/\d+/g)?.reduce((ac, v) => ac + Number(v), 0) / 3 < 127;

    let rows = [];
    let linesInPlainText = [];

    let $rows = this.xml.querySelectorAll("div > div, div > br");

    for (const $line of $rows) {
      let line = [];
      linesInPlainText.push($line.innerText);

      $line.childNodes.forEach(({ style, innerText, ...$token }) => {
     
        const { fontStyle, fontWeight, color } = style;
        if (innerText.startsWith(this.comment.startsWith)) {
          line.push(new TokenText(this.comment.replace, "normal", fontWeight, color))
         
          line.push(new TokenText(
            innerText.replace(this.comment.match, ""),
            'normal', fontWeight, color,
          ));
          return
        }
        line.push(new TokenText(innerText, fontStyle, fontWeight, color ));

      });
      rows.push(line);
    }

    this.rows = rows;
    this.linesInPlainText = linesInPlainText;
  }
  setFontFeatureSettings(isLigatures) {
    if (isLigatures) {
      switch (this.font.family) {
        case "mls":
          this.canvas.style.fontFeatureSettings = fontFeatureSettings.MonoLisa;
          break;
        case "Cascadia Code":
          this.canvas.style.fontFeatureSettings =
            fontFeatureSettings.CascadiaCode;
          break;
        case "Fira Code":
          this.canvas.style.fontFeatureSettings = fontFeatureSettings.FiraCode;
          break;
        default: {
          this.canvas.style.fontFeatureSettings = "normal";
        }
      }
    } else {
      this.canvas.style.fontFeatureSettings = "normal";
    }
  }
}

class VSCodeSnapCode extends SnapCode {
  constructor(canvas, ctx, app) {
    super(canvas, ctx, app);
  }
  renderResaltado(x,y,w,h,bg, borde) {
    this.ctx.fillStyle = bg;
    this.ctx.fillRect(x ,y ,w ,h );
    this.ctx.fillStyle = borde;
    this.ctx.fillRect(x ,y ,6 ,h );
    this.ctx.fillStyle = Color.hsl(135, 100, 70);
  }
  drawControls(x,y){
    this.drw.circle(x, y, 16, "#F76452").fill();
    this.drw.circle(x + 60, y, 16, "#fdbf2c").fill();
    this.drw.circle(x + 120, y, 16, "#1ecf37").fill();
  }
  render() {
    this.fileName = this.app.input.title.value;
    const widthOfLines = new Set();
    let colsMax = new Set();

    this.drw.setFont(this.font.size, this.font.family);

    this.linesInPlainText.forEach((textContent) => {
      widthOfLines.add(this.ctx.measureText(textContent).width);
      colsMax.add(textContent.length);
    });

    colsMax = Math.max(...colsMax);
    const maxWidthOfCodeSpace = Math.max(...widthOfLines);

    let wLH = this.ctx.measureText(String(this.rows.length)).width;

    this.heightCode = this.rows.length * this.lineHeight
    // 🫧 Canvas Dimensitions
    this.canvas.width = (this.paddingLineNumbers * 2 + wLH) * 2 + maxWidthOfCodeSpace;
    this.canvas.width = this.canvas.width < 1600 ? 1600 : this.canvas.width;
    this.canvas.height = this.padding * 2 + this.heightCode + 220;

    this.drw.setFont(this.font.size, this.font.family);

    if (this.app.checkbox.fondo.checked) {
      this.ctx.drawImage(
        images.background,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    }
    this.drw.roundRect(
      this.padding,
      this.padding, 
      this.canvas.width - this.padding * 2,
      this.canvas.height - this.padding * 2,
      this.borderRadius
    ).clip();
    
    // Background
    this.ctx.fillStyle = this.bgColor;
    this.drw.roundRect(
      this.padding,
      this.padding, 
      this.canvas.width - this.padding * 2,
      this.canvas.height - this.padding * 2,
      this.borderRadius
    ).fill();

    this.ctx.filter = "none";

    this.ctx.strokeStyle = this.isDark ? "#ffffff22" : "rgba(0,0,0,.2)";
    this.ctx.lineWidth = 2;

    this.ctx.shadowBlur = 0;

    const snap = {
      x: this.padding + this.paddingLineNumbers * 2 + wLH,
      y: this.padding + 120 + this.lineHeight,
    };

    this.drw.setFont(42, "DM Sans");
    const d = this.ctx.measureText(this.fileName).width

    // Spacio Superior
    this.ctx.fillStyle = "#00000033";
    this.ctx.fillRect(snap.x + 80 + d, this.padding, this.canvas.width-292-d, 120);
    // 🫧 Icon Folder
    let size = 50;
    this.ctx.filter = this.isDark ? "none" : "invert(100)";
    this.ctx.drawImage(
      images.iconFile,
      this.padding + 44,
      this.padding + 60 - size / 2,
      size,
      size
    );

    this.ctx.drawImage(
      images.dismiss,
      this.padding + 160 + d,
      this.padding + 60 - size / 2,
      size,
      size
    );

    this.ctx.filter = "none";

    // 🫧 Title
    this.ctx.textBaseline = "middle";
    this.drw.setFont(42, "DM Sans");
    this.ctx.fillStyle = this.isDark ? `rgba(255,255,255,0.9)` : "#000000ff";
    this.ctx.fillText(this.fileName, this.padding + 130, this.padding + 60);
    this.ctx.fillStyle = this.isDark ? `rgba(255,255,255,0.5)` : "#000000ff";

    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#ffffff22";

    this.ctx.beginPath();
    this.ctx.moveTo(snap.x + 80 + d, this.padding);
    this.ctx.lineTo(snap.x + 80 + d, this.padding + 120);
    this.ctx.lineTo(this.canvas.width - this.padding, this.padding + 120);
    this.ctx.stroke();

    this.ctx.filter = this.isDark ? "none" : "invert(100)";
    this.ctx.drawImage(
      images.iconCube,
      this.canvas.width - this.padding - 90,
      90 - size / 2,
      size,
      size
    );
    this.ctx.drawImage(
      images.iconPlay,
      this.canvas.width - this.padding - 170,
      90 - size / 2,
      size,
      size
    );
    this.ctx.filter = "none";

    // 🍒 Drawning Lines
    this.ctx.textBaseline = "top";
    this.rows.forEach((line, i) => {

      // resaltado
      let linesGreen = [2, 3, 5];
      let linesRed = [0];

      let rest = this.lineHeight / 6;
      this.ctx.fillStyle = this.isDark ? "rgba(255,255,255,.3)" : "rgba(0,0,0,.4)";
      if (linesGreen.includes(i)) {
        // this.renderResaltado(
        //   this.padding,
        //   snap.y + i * this.lineHeight - rest,
        //   this.canvas.width - this.padding * 2,
        //   this.lineHeight,
        //   "hsla(135,100%,30%,0.1)",
        //   "hsla(135,100%,30%,0.5)",
        // )
      } else if (linesRed.includes(i)) {
        // this.renderResaltado(
        //   this.padding,
        //   snap.y + i * this.lineHeight - rest,
        //   this.canvas.width - this.padding * 2,
        //   this.lineHeight,
        //   "hsla(5,100%,30%,0.1)",
        //   "hsla(5,100%,70%,0.8)",
        // )
      }

      // line Numbers
      this.ctx.textAlign = "right";
      this.drw.setFont(this.font.size, this.font.family);
      this.ctx.fillText(
        i + 1,
        this.padding + this.paddingLineNumbers + wLH,
        i * this.lineHeight + snap.y
      );

      this.ctx.textAlign = "left";

      // ✏️ Indentation
      if (line[0] !== undefined && /^(\s\s)+/.test(line[0].textContent)) {
        let r = this.ctx.measureText("..").width;
        let text = [...line[0].textContent.replaceAll(/\s/g, " ")];
        // let gj = text.match(/\s/g);
        this.ctx.fillStyle = "rgba(255,255,255,.1)";

        let tab = 0;
        let k = 0;
        while (text[tab] == " ") {
          this.ctx.fillRect(
            snap.x + r * k,
            this.lineHeight * i + snap.y - 6,
            2,
            this.lineHeight
          );
          k++;
          tab += 2;
        }
      }

      if (Math.random() >= 0.5) {
        this.ctx.fillStyle = `hsla(${Math.random() * 360},100%,90%,0.1)`;
        this.ctx.fillStyle = Color.hsla(Math.random() * 360,100,90,0.1);
        this.drw.rectRound(
            this.canvas.width - this.padding - 20,
            snap.y + i * this.lineHeight - 3,
            10,
            this.lineHeight * 0.75,
            5
          ).fill();
      }

      let left = snap.x;
      line.forEach(
        ({ textContent, fontStyle, fontWeight, color, shadowColor }, i2) => {
          this.ctx.textAlign = "left";

          if (this.app.checkbox.italic.checked) {
            this.drw.setFont(
              this.font.size,
              this.font.family,
              fontWeight,
              fontStyle
            );
          } else {
            this.drw.setFont(this.font.size, this.font.family, fontWeight);
          }

          let x = left;
          let y = snap.y + i * this.lineHeight;

          this.ctx.fillStyle = "rgba(255,255,255,.03)";

          let text = textContent.replace(/\s/g, " ");

          let txtM = text.replace(/\s/g, "•");
          this.ctx.fillText(txtM, x, y);

          if (shadowColor) this.drw.setShadow(shadowColor, 14, 0, 0);
          this.ctx.fillStyle = color;
          this.ctx.fillText(text, x, y);
          this.drw.setShadow(shadowColor, 0, 0, 0);

          left += this.ctx.measureText(text).width;
        }
      );
    });

  

    this.ctx.strokeStyle = "#ffffff22";
    this.drw.roundRect(
      this.padding,
      this.padding, 
      this.canvas.width - this.padding * 2,
      this.canvas.height - this.padding * 2,
      this.borderRadius
    ).stroke();

    // 👁️ Show Info Canvas
    this.app.cvW.textContent = "Width: " + this.canvas.width;
    this.app.cvH.textContent = "Height: " + this.canvas.height;
  }
}

export { SnapCode, VSCodeSnapCode };
