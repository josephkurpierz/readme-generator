// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: "What is the description of your project?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project decription!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installation instructions?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter how to install your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: "How is your project used?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter how your project is used!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: "What languages were used in your project?",
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your link!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Under what license is this application covered?',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
},
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
