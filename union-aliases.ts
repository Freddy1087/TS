type Combinable = number | string; // Creates a Type Alias, allowing you to keep the type settings and save you from hard coding the property types over and over.

type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
    return result;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
// console.log(combinedNames);

enum CardinalDirections {
  North,
  West,
  East,
  South,
}

console.log(CardinalDirections.South);
