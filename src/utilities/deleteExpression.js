import { operators } from '/src/Constants/index.js';

function deleteExpression(expression) {
  return expression.slice(0, expression.length - 1); 
}

export { deleteExpression };