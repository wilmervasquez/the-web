import fs from "fs";




function widget(...childs){
  for (const child of childs) {
    
  }

  return {css,js}
}



const {js,css} = widget([{
  tag:'div'
}])



fs.writeFileSync('build/widget.js',js)
fs.writeFileSync('build/widget.css',css)