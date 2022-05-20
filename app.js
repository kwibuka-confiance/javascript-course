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

// TODO JAVASCRIPT METHODS
// filter
// REDUCE

const employees = [
  { name: "Shumbusho", image: "", salary: 400, age: 22 },
  { name: "Patrick", image: "", salary: 230, age: 24 },
  {
    name: "Alvin",
    image:
      "https://media.istockphoto.com/photos/passport-photo-of-serious-brazilian-young-adult-man-with-braces-picture-id1315808211?k=20&m=1315808211&s=612x612&w=0&h=VmBH7yrF7EQqPVQu9wAfge6opadEbvJf3OpOX9PARPg=",
    salary: 250,
    age: 22,
  },
  {
    name: "Liliane",
    image: "https://visafoto.com/img/docs/ee_passport_40x50mm.jpg",
    salary: 200,
    age: 22,
  },
  {
    name: "Heritier",
    image:
      "https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg",
    salary: 230,
    age: 24,
  },
  { name: "Grace", image: "", salary: 300, age: 21 },
  { name: "Gloria", image: "", salary: 200, age: 22 },
];

function findEmployeesBetween23KAnd30K(employeesArray) {
  const filteredArray = employeesArray.filter(
    (element, index) => element.salary >= 200 && element.salary <= 300
  );
  return filteredArray;
}

// SHow us the total salary to be paid

const showAllSalaries = (allEmployees) => {
  const totalSalary = allEmployees.reduce((acc, obj) => {
    return obj.salary + acc;
  }, 0);
  return totalSalary;
};

// const finalresult = showAllSalaries(employees);
// console.log(` TOTAL SALARY IS : ${finalresult}k`);

// TODO DISPLAY THE ALL LIST WITH IMAGES BUT IF WE HAVE  IMAGE REPLACE IMAGE WITH "IMAGE",
// IF WE FOUND NO IMAGE DISPLAY FIRST CHARACTER OF OUR NAME

function displayList(listArray) {
  const finalResult = listArray.map((element, index) => {
    const firstChr = element.name.slice(0, 1).toUpperCase();
    if (element.image === "") {
      return `Number ${index + 1} ${firstChr} but name is ${
        element.name
      } with ${element.salary}K monthly `;
    } else {
      return `Number ${index + 1} has image and name is ${element.name} with ${
        element.salary
      }K monthly `;
    }
  });
  return finalResult;
}

console.log(displayList(employees));
