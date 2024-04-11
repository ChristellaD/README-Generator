// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'Project Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'Mozilla', 'Apache', 'The Unlicense', 'GNU', new inquirer.Separator(), 'No License']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email address (ideally suitable for business inquiries).'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return; }
console.log('README.md has been generated.');
  });
};


// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(
    questions
  )
  .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
  };
// Function call to initialize app
init();
