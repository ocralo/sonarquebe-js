class Calculator {
	/**
	 * add - Suma dos valores
	 * @param {number} a primer valor a agregar
	 * @param {number} b segundo valor a agregar
	 * @returns number
	 */
	add(a, b) {
		return a + b
	}

	/**
	 * subtract - Resta dos valores
	 * @param {number} a primer valor a restar
	 * @param {number} b segundo valor a restar
	 * @returns number
	 */
	subtract(a, b) {
		return a - b
	}

	/**
	 * multiply - Multiplica dos valores
	 * @param {number} a numero de veces a multiplicar
	 * @param {number} b valor a multiplicar
	 * @returns number
	 */
	multiply(a, b) {
		let result = 0
		for (let i = 0; i < a; i++) {
			result = this.add(result, b)
		}
		return result
	}
}

export default Calculator
