#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices:  ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "Modulus"],
    },
]);

// Conditional statement 
if (answer.operator === "Addition") {
    console.log("Result:", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log("Result:", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log("Result:", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    if (answer.secondNumber === 0) {
        console.log("Error: Division by zero");
    } else {
        console.log("Result:", answer.firstNumber / answer.secondNumber);
    }
} else if (answer.operator === "Percentage") {
   console.log("Result:", (answer.firstNumber * 100 ) / answer.secondNumber);
} else if (answer.operator === "Modulus") {
    console.log("Result:", answer.firstNumber % answer.secondNumber);
} else {
    console.log("Select a valid operator.");
}