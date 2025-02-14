import { operations } from '/src/Constants/index.js';
import { operators } from '/src/Constants/index.js'

function fetchOperand(expression, index) {
  let operand = '';

  while (index < expression.length && 
      !(operators.includes(expression[index]))) {
        
    operand += expression[index];

    index++;
  }

  return operand;
}

function calculateExpressionResult(expression) {
  let index = 0;
  let accumulator = fetchOperand(expression, index);

  index += accumulator.length;

  while (index < expression.length) {
    let next_operand = fetchOperand(expression, index + 1);

    accumulator = operations[expression[index]](parseFloat(accumulator), parseFloat(next_operand));

    index += next_operand.length + 1;
  }

  return accumulator;
}

export { calculateExpressionResult };