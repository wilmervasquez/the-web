class Color {
  static hsl(h = 0, s = 100, l = 50) {
    return `hsl(${h},${s}%,${l}%)`
  }
  static hsla(h = 0, s = 100, l = 50, a = 1) {
    return `hsla(${h},${s}%,${l}%,${a})`
  }
}

export { Color }