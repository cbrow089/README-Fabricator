// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [   
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'Give us a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How is this installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license?',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are the guidelines for contribution?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Do you have instructions for testing?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   const markdownContent = generateMarkdown(data);
   return markdownContent;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then((data) => 
        {

            console.log(data);
            const markdownContent = generateMarkdown(data);
            fs.writeFile('README.md', markdownContent, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('README.md generated');
            });
        });

}

// Function call to initialize app
init();
