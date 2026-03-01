#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following arithmetic operations:
 *   - add      : Addition (sum two numbers)
 *   - subtract : Subtraction (difference between two numbers)
 *   - multiply : Multiplication (product of two numbers)
 *   - divide   : Division (quotient of two numbers, with division-by-zero handling)
 *   - mod      : Modulo (remainder of division, with modulo-by-zero handling)
 *   - power    : Exponentiation (base raised to an exponent)
 *   - sqrt     : Square root (of a non-negative number)
 *
 * Usage:
 *   node calculator.js add 5 3        # Output: 8
 *   node calculator.js subtract 9 4   # Output: 5
 *   node calculator.js multiply 6 7   # Output: 42
 *   node calculator.js divide 10 2    # Output: 5
 *   node calculator.js mod 10 3       # Output: 1
 *   node calculator.js power 2 8      # Output: 256
 *   node calculator.js sqrt 9         # Output: 3
 */

// Addition: returns the sum of two numbers
function add(x, y) {
  return x + y;
}

// Subtraction: returns the difference between two numbers
function subtract(x, y) {
  return x - y;
}

// Multiplication: returns the product of two numbers
function multiply(x, y) {
  return x * y;
}

// Division: returns the quotient of two numbers; throws on division by zero
function divide(x, y) {
  if (y === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return x / y;
}

// Modulo: returns the remainder of x divided by y; throws if y is zero
function mod(x, y) {
  if (y === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return x % y;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of x; throws if x is negative
function sqrt(x) {
  if (x < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(x);
}

module.exports = { add, subtract, multiply, divide, mod, power, sqrt };

// Only run the CLI when invoked directly (not when required as a module)
if (require.main === module) {
  const [,, operation, a, b] = process.argv;

  if (!operation) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|mod|power|sqrt> <num1> [num2]');
    process.exit(1);
  }

  // sqrt takes one argument; all other operations take two
  const isSingleArg = operation === 'sqrt';
  const num1 = parseFloat(a);
  const num2 = isSingleArg ? undefined : parseFloat(b);

  if (isNaN(num1) || (!isSingleArg && isNaN(num2))) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|mod|power|sqrt> <num1> [num2]');
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      case 'mod':
        result = mod(num1, num2);
        break;
      case 'power':
        result = power(num1, num2);
        break;
      case 'sqrt':
        result = sqrt(num1);
        break;
      default:
        console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, mod, power, or sqrt.`);
        process.exit(1);
    }
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }

  console.log(result);
}
