#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *   - add      : Addition (sum two numbers)
 *   - subtract : Subtraction (difference between two numbers)
 *   - multiply : Multiplication (product of two numbers)
 *   - divide   : Division (quotient of two numbers, with division-by-zero handling)
 *
 * Usage:
 *   node calculator.js add 5 3        # Output: 8
 *   node calculator.js subtract 9 4   # Output: 5
 *   node calculator.js multiply 6 7   # Output: 42
 *   node calculator.js divide 10 2    # Output: 5
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

module.exports = { add, subtract, multiply, divide };

// Only run the CLI when invoked directly (not when required as a module)
if (require.main === module) {
  const [,, operation, a, b] = process.argv;
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  let result;

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
      try {
        result = divide(num1, num2);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }

  console.log(result);
}
