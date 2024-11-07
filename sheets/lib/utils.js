export function $(selector){
	return document.querySelector(selector);
}
export function $$(selector){
	return document.querySelectorAll(selector);
}
export function computedValue(value,cns){
	if(typeof value === 'number') return value
	if (!value.startsWith('=')) return value;

	let v = value.slice(1)
	try {
		console.log(`(()=>{${cns}; return ${v}})()`)
		v = eval(`(()=>{${cns} return ${v}})()`)
		return v
	} catch (err) {
	 console.log(err)
	 return `!ERROR: ${err.message}`
	}
}
export const range = ( length ) => Array.from({ length }, (_, i) => i);