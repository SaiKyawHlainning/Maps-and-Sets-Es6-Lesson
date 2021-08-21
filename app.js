/* Maps */
// Assignment Destructuring

// let a, b;
// // [a, b] = [1, 2];
// // [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];

// // // console.log(a, b, rest);
// // console.log(rest);

// ({ a, b } = { a: 1, b: 2, c: 3 });
// ({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });

// console.log(a, b, rest);

// Array Destructuring
// const people = ['Steven', 'John', 'Sara'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse form array function
// function peopleFun() {
//   return ['Steven', 'John', 'Sara'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = peopleFun();

// console.log(person1, person2, person3);

// Object Destructuring
// const myObject = {
//   myName: 'Steven Smith',
//   age: 22,
//   city: 'Ayutthaya',
//   gender: 'Male',
//   myFun: function () {
//     console.log('Hello Thailand!');
//   },
// };

// const { myName, age, city, myFun } = myObject;

// console.log(myName, age, city);

// myFun();

/* Sets */
// const set = new Set();

// set.add(123);
// set.add('Hello World!');
// set.add({ name: 'Steven Smith' });
// set.add(true);
// set.add(true);

// const set = new Set([123, true, 'Hello!']);

// console.log(set);
// console.log(set.size);

// console.log(set.has(123));
// console.log(set.has('Hello World!'));

// // Delete set
// set.delete(123);
// console.log(set);

// ForEach Loop
// set.forEach((value) => {
//   console.log(value);
// });

// // Convert set to array
// const setArr = Array.from(set);
// console.log(setArr);
