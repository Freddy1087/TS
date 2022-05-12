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
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
// person.role.push("admin");
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["gaming", "driving"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()); // !!! ERROR !!!
}
