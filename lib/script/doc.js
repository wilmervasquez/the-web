export function tmpl(id) {
  const tm = document.getElementById(id)
  return tm.content.cloneNode(true)
}