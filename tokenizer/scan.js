

class TextScanner {
  constructor(text) {
    this.text = text.split("\n");
    this.column = 0;
    this.line = 0;
    this.lines = this.text.length;
    this.lastLineColumn = this.text[this.text.length - 1].length;
    this.isEndOfText = false;
  }

  findNext(regexp) {
    if (this.isEndOfText) {
      throw new Error("¡I'm done !");
    }

    const searchRegex = new RegExp(regexp, "dy");
    searchRegex.lastIndex = this.column;

    const result = searchRegex.exec(
      this.text[this.line]
    );

    if (result) {
      this.column = searchRegex.lastIndex;
      // console.log(this.line, this.column);

      if (this.line + 1 === this.lines && this.column == this.lastLineColumn) {
        this.isEndOfText = true;
      }

      if (this.column === this.text[this.line].length) {
        this.line += 1;
        this.column = 0;
      }

      return result;
    } else {
      return null;
    }
  }
  findNextWithGroupNames(
    regex,
    matchCaptures,
    name = ""
  ) {
    let line = this.line;
    const result = this.findNext(regex);
    if (!result) return null;
    // console.log(result);
    const text = result[0].split("");
    const keys = text.map(() => name);
    if (text.length === 0)
      return { line, groups: [{ name, content: "" }] };

    Object.entries(matchCaptures).forEach(([group, name]) => {
      const [start, end] = result.indices[Number(group)] ?? [0, 0];

      keys.fill(name, start - result.index, end - result.index);
    });

    // agrupamiento
    const data = [
      { name: keys[0], content: text[0] },
    ];

    for (let i = 1; i < keys.length; i++) {
      const name = keys[i];

      if (data[data.length - 1].name === name) {
        data[data.length - 1].content += text[i];
        continue;
      }

      data.push({ name, content: text[i] });
    }
    return { line, groups: data };
  }
}

export { TextScanner }