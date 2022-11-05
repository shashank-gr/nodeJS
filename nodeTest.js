//Task 1
// console.log("Hello world");

//Task 2
//add 2 numbers
// const add = (a, b) => a + b;
// console.log(add(10, 30));

//student Object
// this.name = "hahaha";
// const student = {
//   name: "shashanka",
//   age: 24,
//   greet: () => console.log(`This is ${this.name}`), //undefined due to parent scope of arrow function -->refers to "hahaha"
//   greet2: function () {
//     console.log(`This is ${this.name}`); // works with normal function declaration
//   },
//   greet3() {
//     console.log(`This is ${this.name}`);
//   }, //here greet3 is a method of object
// };

// student.greet(); //hahah
// student.greet2(); //shashanka
// student.greet3(); //shashanka

//Task 3
// const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
// const modifiedArr = array.map((el) => {
//   return el == " " ? "Empty string" : el;
// });
// console.log(modifiedArr);

//spread operator-->shallow copy, creates a new array or object
// const a = [1, 2, 3, 4];
// const b = [...a];
// b.push(5);
// //a and b are different objects
// console.log("a", a);
// console.log("b", b);

//rest operator--->used as params to a function
// const restTest = (...params) => {
//   return params; //params will be a array
// };

// console.log(restTest(1, 2, 3, 4));

//task 5
// new Promise((res) => {
//   console.log("a");
//   console.log("b");
//   setTimeout(() => {
//     console.log("c");
//     res();
//   }, 3000);
// })
//   .then(() => {
//     return new Promise((res) => {
//       setTimeout(() => {
//         console.log("d"), res();
//       }, 0);
//     });
//   })
//   .then(() => {
//     console.log("e");
//   });

// const printInOrder = async () => {
//   console.log("a");
//   console.log("b");
//   await new Promise((res) => {
//     setTimeout(() => {
//       console.log("c");
//       res();
//     }, 3000);
//   });
//   await new Promise((res) => {
//     setTimeout(() => {
//       console.log("d");
//       res();
//     }, 3000);
//   });
//   console.log("e");
// };
