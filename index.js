// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },{
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },{    
            type: "input",
            message: "What is the title of your repository?",
            name: "title"
        },{
            type: "input",
            message: "Please provide a description of your project.",
            name: "description"
        },{
            type: "input",
            message: "Please walkthrough the steps to install your project.",
            name: "installation"
        },{
            type: "input",
            message: "Please discribe how to properly use your application.",
            name: "usage"
        },{
            type: "input",
            message: "Please demonstrate tests of your application's functionality.",
            name: "tests"
        },{
            type: "input",
            message: "Please list any outside contributions.",
            name: "contributions"
        },{
            type: "list",
            message: "Please select which license you would like to use.",
            name: "license",
            choices : [
                "APACHE 2.O",
                "Boost",
                "BSD 2",
                "CC0",
                "MIT",
                "Mozilla",
                "None"
            ],
        },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(`${fileName}.md`, data, e => {
         if(e) {
             console.log(e + " this is write to file error")
         }
     })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        const markdownData = generateMarkdown(response)
        writeToFile("./README.md", markdownData)
    })
}  

// Function call to initialize app
init();
