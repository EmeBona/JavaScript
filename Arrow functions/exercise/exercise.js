// const sum = function (a, b) {
//   return a + b;
// }

const sum = (a,b) => {
  return a + b;
}

// const subtract = function (a, b) {
//   return a - b;
// }

const substract = (a,b) =>{
  return a - b;
}

// const multiply = function (a, b) {
//   return a * b;
// }

const multiply = (a,b) =>{
  return a * b;
}

// const divide = function (a, b) {
//   return a / b;
// }

const divide = (a, b)=>{
  return a / b
}

const log = (value) =>{
   console.log(value);
}

let result = divide(substract(multiply(sum(2, 4), sum(5,2)), 2), 5);

log(result);