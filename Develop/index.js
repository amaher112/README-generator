// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
function init() {
inquirer
  .prompt([
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
  ])
  .then((data) => {
 
    // Function to write README file
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success! Your README file has been created.");
      }
    });
  });

}

function writeToFile(README, data) {
}

// Function call to initialize app
init();
