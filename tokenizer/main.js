import { TextScanner } from "./scan.js";

class TokenizerMagic {
  constructor(text) {
    this.scanner = new TextScanner(text.trim());
    this.results = this.start();
  }
  start() {
    return this.Program();
  }

  Program() {
    return {
      type: "Program",
      value: [this.Main()]
    }
  }
  Main() {
    const value = []

    const scopes = [
      this.WidgetLess.bind(this),
      this.Braces.bind(this)
    ];

    for (let i = 0; i < 5; i++) {
      
      
      let ps1 = false;
      for (const scope of scopes) {
        
        const fg = scope();
        if (!fg) continue;
  
        ps1 = true;
  
        value.push(fg);
        break;
      }
  
      if (ps1) break;
    }
    // while (!this.scanner.isEndOfText) {
    // }
    

    return {
      type: "struct",
      value
    }
  }
  WidgetLess() {
    console.log(this)
    let result = this.scanner.findNext(/[a-zA-Z]+/);
    if (!null) return null;

    return {
      type: "WidgetLess",
      value: [result[0]]
    }
  }
  Braces() {
    return {
      type: "Braces",
      value: []
    }
  }
}


const fg = new TokenizerMagic(`
  Row { Column { } }
`);
console.log('Building---------------------------------------')
console.log(fg.results)

const items = [[/**2 */]]


const fg2 = new TokenizerMagic(`  Row { Column { } } `);
console.log('Building---------------------------------------')
console.log(fg2.results)

let NameClass = new TextPulpusos()

let main = new Reapeting('class', NameClass, '{', main ,'}')

console.log(main)