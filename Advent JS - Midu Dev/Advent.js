function findNaughtyStep(original, modified) {
	// Convierte las cadenas en arreglos para facilitar la comparación
	const originalArray = original.split('');
	const modifiedArray = modified.split('');

	// Compara las longitudes para determinar si se ha añadido o eliminado un paso
	if (originalArray.length === modifiedArray.length) {
		// Si las longitudes son iguales, itera sobre los elementos para encontrar la diferencia
		for (let i = 0; i < originalArray.length; i++) {
			if (originalArray[i] !== modifiedArray[i]) {
				return modifiedArray[i];
			}
		}
	} else if (originalArray.length < modifiedArray.length) {
		// Si la longitud de la cadena modificada es mayor, significa que se añadió un paso
		for (let i = 0; i < originalArray.length; i++) {
			if (originalArray[i] !== modifiedArray[i]) {
				return modifiedArray[i];
			}
		}
		// Si no se encontró la diferencia en los primeros elementos, la diferencia está en el último
		return modifiedArray[modifiedArray.length - 1];
	} else {
		// Si la longitud de la cadena original es mayor, significa que se eliminó un paso
		for (let i = 0; i < modifiedArray.length; i++) {
			if (originalArray[i] !== modifiedArray[i]) {
				return originalArray[i];
			}
		}
		// Si no se encontró la diferencia en los primeros elementos, la diferencia está en el último
		return originalArray[originalArray.length - 1];
	}

	// Si no se encuentra ninguna diferencia, devuelve una cadena vacía
	return '';
}