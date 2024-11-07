x = [1,3,5]
y = [1,3,3]

sum_x = 0
x.forEach(i => {
	sum_x += i
});

sum_y = 0
y.forEach(i => {
	sum_y += i
});

sum_x_y = 0
sum_x2 = 0

x.forEach((n,i) => {
	sum_x_y += n* y[i]
	sum_x2 += n**2
});

let result = [
	sum_x_y - ((sum_x*sum_y)/x.length),
	sum_x2 - ((sum_x**2)/x.length),
]

result


let pendiente = result[0]/result[1]
let ecuaton = (sum_y/x.length)-(pendiente*(sum_x/x.length))
ecuaton

console.log(`y = ${result[0]}/${result[1]}x + ${ecuaton}`)
console.log(`y = ${result[0]/result[1]}x + ${ecuaton}`)