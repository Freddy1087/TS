// const person: {        //not best coding practices
//   name: string;
//   age: number;
// } = {
// const person: {      // Course 19
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["gaming", "driving"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}