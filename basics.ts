function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// Object types below

const FM: object = {
  firstName: "Freddy",
  age: 34,
  title: "Software Engineer",
  male: true,
};

// Ideal but better to use Interfaces!!
const EA: { firstname: string; age: number; title: string; male: boolean } = {
  firstname: "Elias",
  age: 33,
  title: "Senior SE",
  male: true,
};

const ET: {} = {
  firstName: "Evin",
  age: 35,
  title: "Veterinarian",
  male: false,
};
