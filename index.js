#! /usr/bin/env node
// This is the line called shebang, it telss the OS to run it with node.js
// import the "inquirer" module, which is command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant 'answers' and assign it to the result of inquirer.promt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word counter is : ${words.length}`);
