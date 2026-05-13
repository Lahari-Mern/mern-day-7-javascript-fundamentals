alert("Welcome to JavaScript!");

console.log("Hello JavaScript");


let score = 50;

score = 80;

console.log("Updated Score:", score);


let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);

console.log("Subtraction:", num1 - num2);

console.log("Multiplication:", num1 * num2);

console.log("Division:", num1 / num2);

console.log("Modulus:", num1 % num2);


let userName = prompt("Enter Your Name");

console.log("User Name:", userName);


let x = 10;

x += 5;

console.log("Updated Value of x:", x);


let a = 10;
let b = 5;

console.log("a > b :", a > b);

console.log("a < b :", a < b);

console.log("a == b :", a == b);


let age = 20;

console.log("Age Between 18 and 30 :", age > 18 && age < 30);


let studentName = "Lahari";

console.log("String:", studentName);

let studentAge = 19;

console.log("Number:", studentAge);

let isStudent = true;

console.log("Boolean:", isStudent);

let city;

console.log("Undefined:", city);

let data = null;

console.log("Null:", data);


let student = {

    name: "Lahari",

    age: 19

};

console.log("Student Details:", student);


let userAge = 15;

if(userAge >= 18){

    console.log("Adult");

}
else{

    console.log("Minor");

}


let marks = 75;

if(marks >= 90){

    console.log("Grade A");

}
else if(marks >= 70){

    console.log("Grade B");

}
else{

    console.log("Fail");

}


let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");

}
