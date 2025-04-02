import Calculator from './index'

describe('Calculator', () => {
	describe('add', () => {
		it('adds two numbers', () => {
			const calculator = new Calculator()
			expect(calculator.add(1, 2)).toBe(3)
		})
	})

	describe('subtract', () => {
		it('subtracts two numbers', () => {
			const calculator = new Calculator()
			expect(calculator.subtract(2, 1)).toBe(1)
		})
	})

	describe('multiply', () => {
		it('multiplies two numbers', () => {
			const calculator = new Calculator()
			expect(calculator.multiply(2, 3)).toBe(6)
		})
	})
})
