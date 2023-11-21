const inquirer = require('inquirer');
const fs = require ('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";

// functions that creatw new svg file using inquirer
function createLogo(response) {
const svg = setShape(response);
fs.writeFile(fileNmae,svg, ()=> Console.log('generatedlogo.svg'));
}

//questions that create logo using response
