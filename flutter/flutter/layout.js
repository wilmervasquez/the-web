export function Column({childs}){
  const $e = document.createElement('div');
  $e.style.display = 'flex';
  $e.style.flexDirection = 'column';
  const $childs = document.createDocumentFragment()
  if (childs!=null) {
    for (const child of childs) {
      const $e2 = document.createElement('div');
      $childs.appendChild($e2);
    }
    $e.appendChild($childs);
  }
  return $e
}

export function Row({childs}){
  const $e = document.createElement('div');
  $e.style.display = 'flex';
  $e.style.flexDirection = 'column';
  const $childs = document.createDocumentFragment()
  if (childs!=null) {
    for (const child of childs) {
      const $e2 = document.createElement('div');
      $childs.appendChild($e2);
    }
    $e.appendChild($childs);
  }
  return $e
}