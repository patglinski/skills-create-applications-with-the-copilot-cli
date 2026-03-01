/**
 * Unit tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - add      : Addition
 *   - subtract : Subtraction
 *   - multiply : Multiplication
 *   - divide   : Division (including division-by-zero edge case)
 *   - mod      : Modulo (including modulo-by-zero edge case)
 *   - power    : Exponentiation
 *   - sqrt     : Square root (including negative number edge case)
 */

const { add, subtract, multiply, divide, mod, power, sqrt } = require('../calculator');

// ── Addition ──────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive integers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(7, -3)).toBe(4);
  });

  test('adds floats', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test('adding zero returns the same number', () => {
    expect(add(99, 0)).toBe(99);
  });
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts positive integers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('subtracts resulting in a negative number', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts floats', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(42, 0)).toBe(42);
  });
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies positive integers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero returns zero', () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test('multiplies negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -6)).toBe(-30);
  });

  test('multiplies floats', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ── Division ──────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides positive integers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides negative numbers', () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test('divides a positive by a negative number', () => {
    expect(divide(9, -3)).toBe(-3);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ── Modulo ────────────────────────────────────────────────────────────────────
describe('mod', () => {
  test('returns remainder of 10 % 3 = 1', () => {
    expect(mod(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(mod(10, 5)).toBe(0);
  });

  test('works with negative dividend', () => {
    expect(mod(-7, 3)).toBe(-1);
  });

  test('works with negative divisor', () => {
    expect(mod(7, -3)).toBe(1);
  });

  test('works with floats', () => {
    expect(mod(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => mod(10, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

// ── Exponentiation ────────────────────────────────────────────────────────────
describe('power', () => {
  test('raises 2 to the power of 8 to equal 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('raises a number to the power of 0 equals 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of 1 equals itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('handles negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('handles fractional exponent', () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });

  test('handles negative base with odd exponent', () => {
    expect(power(-3, 3)).toBe(-27);
  });
});

// ── Square Root ───────────────────────────────────────────────────────────────
describe('sqrt', () => {
  test('returns square root of 9 = 3', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('returns square root of 4 = 2', () => {
    expect(sqrt(4)).toBe(2);
  });

  test('returns square root of 2 (irrational)', () => {
    expect(sqrt(2)).toBeCloseTo(1.4142);
  });

  test('returns 0 for sqrt(0)', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('returns square root of 1 = 1', () => {
    expect(sqrt(1)).toBe(1);
  });

  // Edge case: negative number
  test('throws an error for negative input', () => {
    expect(() => sqrt(-1)).toThrow('Square root of a negative number is not allowed.');
  });
});
