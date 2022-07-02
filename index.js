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
    type: 'confirm',
    name: 'collaboratorsCheck',
    message: "Did you have collaborators on this project?",
    default: false
  },
  {
    type: 'input',
    name: 'collaborators',
    message: "Who collaborated on this project?",
    when: ({collaboratorsCheck}) => {
      if (collaboratorsCheck) {
        return true;
      } else {
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
    message: 'Enter your GitHub username. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Under what license is this application covered?',
    choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'The Unlicense']
},
{
  type: 'input',
  name: 'tests',
  message: "Which tests were developed?",
}
];


// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
      console.log("File Created");
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer
  .prompt(questions)
  .then(answers => {
    return generateMarkdown(answers);
  })
  .then(markdown => {
    return writeToFile(markdown);
  })
  .catch(err => {
    console.log(err);
  });
};

// Function call to initialize app
init();
