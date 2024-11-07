function findNaughtyStep(original, modified) {
	if (original == modified) return "";
	let max, min;
	if (original.length > modified.length) {
		max = original;
		min = modified;
	} else {
		max = modified;
		min = original;
	}
	let d = "";
	for (const m of max) {
		if (!min.includes(m)) {
			d += m;
		}
	}

	return d;
}

console.log(findNaughtyStep("abcd", "abcde")); // 'e'
console.log(findNaughtyStep("stepfor", "stepor")); // 'f'
console.log(findNaughtyStep("abcde", "abcde")); // ''
console.log(findNaughtyStep("abcde", "abcdg")); // ''

// -----------------

const analizer = (nm)=>{

}