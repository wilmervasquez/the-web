const csv = `1,4,5,Lenguaje I
1,4,6,Matematica Basica I
`.split('\n').map(m=>m.split(',')).map(([ciclo,credito,hora,curso])=>{return {ciclo,credito,hora,curso}})

function n(params){
  console.log(csv);
}
n()
console.log(20+19+19+22+22+21+21+23+22+21);