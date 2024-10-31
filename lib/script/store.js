export function getWidget(id){
  const template = document.getElementById(id)
  return function(){
    return template.content.cloneNode(true)
  }
}

