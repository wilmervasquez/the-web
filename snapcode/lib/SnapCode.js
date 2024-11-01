class SnapCode {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.xml = document.createElement('code');

    
    this.comment = {
      match: /\/\/ /,
      replace: "↝ ",
      startsWith: "//"
    }
    
    this.setXML(localStorage.getItem("html") ?? `<div style="color: #abb2bf;background-color: #282c34;font-family: Cascadia Code, MonoLisa, Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: hsl(${Math.random()*360},100%,70%);font-style: italic;">Paste your code from VSCode</span></div></div>`)
  }
  setXML(xml) {
    this.xml.innerHTML = xml;
    console.log(this.xml.firstChild)

    this.bgColor = this.xml.firstChild.style.backgroundColor;
    console.log(this.bgColor)
    this.isDark = this.bgColor.match(/\d+/g).reduce((ac, v)=>ac + Number(v),0) / 3 < 127;

    let rows = []
    let linesInPlainText = []

    let $rows = this.xml.querySelectorAll("div > div, div > br");
    console.log($rows)
    
    for (const $line of $rows) {
      let line = []
      linesInPlainText.push($line.innerText)

      $line.childNodes.forEach(($token) => {
        let $lineComputedStyle = $token.style;
          
        if (($token.innerText).startsWith(this.comment.startsWith)) {
          line.push({
            textContent: this.comment.replace,
            fontStyle: 'normal',
            fontWeight: $lineComputedStyle.fontWeight,
            color: $lineComputedStyle.color,
          })
          line.push({
            textContent: $token.innerText.replace(this.comment.match, ""),
            fontStyle: 'normal',
            fontWeight: $lineComputedStyle.fontWeight,
            color: $lineComputedStyle.color,
          })
        } else {
  
          line.push({
            textContent: $token.innerText,
            fontStyle: $lineComputedStyle.fontStyle,
            fontWeight: $lineComputedStyle.fontWeight,
            color: $lineComputedStyle.color,
          })
        }
      })
      rows.push(line)
    }
  
    this.rows = rows
    this.linesInPlainText = linesInPlainText;
 
  }
  render() {
    
  }
}

class VSCodeSnapCode extends SnapCode {
  constructor(canvas, ctx) {
    super(canvas, ctx)


  }
}

export { SnapCode, VSCodeSnapCode}