// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description about your project:",
    name: "description",
  },

  {
    type: "input",
    message: "Please provide any installation instructions:",
    name: "installation",
  },

  {
    type: "input",
    message: "Are there any instructions for using this project?",
    name: "usage",
  },

  {
    type: "input",
    message: "Would you like to add any contribution guidelines?",
    name: "contributing",
  },

  {
    type: "input",
    message: "Are there any instructions for testing the project?",
    name: "tests",
  },

  {
    type: "list",
    message: "Please choose a license:",
    name: "license",
    choices: ["Apache", "Elipse", "MIT", "Mozilla", "Perl"],
  },

  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "username",
  },

  {
    type: "input",
    message: "Please enter your email address:",
    name: "email",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
