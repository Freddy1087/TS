//Function Types

function adding(n1: number, n2: number) {
  //number return type | Inferred
  return n1 + n2;
}

function printResults(num: number) {
  //void return type
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResults(adding(5, 12));

let combineValues: (a: number, b: number) => number; //Proper way to put a function as a type

combineValues = adding;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
