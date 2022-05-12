// const person: {        //not best coding practices
//   name: string;
//   age: number;
// } = {
var person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};
person.role.push("admin");
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["gaming", "driving"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
  var hobby = _a[_i];
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}

// console.log(person.role);
