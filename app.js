// console.log("Hello Tech up skill");
const print = (args) => {
  return console.log(args);
};
// Syntax
// How to use Variables
//operators
// datatypes
//functions
// conditions
// loops
//objects
//arrays

// var name, othername;
// var name;
// var othername;

// let name;

// constant variable;
// const othername = 12;

// let firstNumber = 12;
// const lastNumber = 13;

// firstNumber = 20;

// const result = firstNumber - lastNumber;
// console.log(result);

// const addTwoNumbers = ()=>{};
// const addTwoNumbers = function (){};
// function addTwoNumbers (){}

// if()

// Q1 Display "You can watch adult film" if youre 20 and above years old or "youre to young to watch this films" if below 20 yars

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// console.log(addTwoNumbers(32, 40));
// forloop
// while loop

// let number = 100;

// for (let i = 0; i <= 100; i++) {
//   print(i);
// }

//! function canIwatchAdultFilm(years, name) {
//   // `Hello ${name}, You can watch adult film`
//!   if (years >= 20) return " hello " + name + " You can watch adult film";
//!   else return ` oh sorry ${name}, you're to young to watch this films`;
// !}

// // console.log(canIwatchAdultFilm(20, "Shumbusho"));

// Array

//  const person = {}

//? How many people we have in goup 2 teckup skill
//? SHOW ALL PARTICIPANTS THAT CAMES AT 9 AM

const participants = [
  { name: "ALVIN", age: 21, cameTme: 10 },
  { name: "MOISE", age: 22, cameTme: 11 },
  { name: "EMILE", age: 25, cameTme: 9 },
  { name: "PATRICK", age: 23, cameTme: 10 },
  { name: "GLORIA", age: 21, cameTme: 11 },
  { name: "AUTHOR", age: 19, cameTme: 11 },
  { name: "LILIANE", age: 21, cameTme: 9 },
  { name: "CHANICE", age: 21, cameTme: 10 },
];

// todo  show me the people above 22 years old and came at 9 oclock

const result = participants.filter(
  (element) => element.cameTme == 11 && element.age == 21
);
console.log(result);
