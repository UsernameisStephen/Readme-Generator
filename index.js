// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "What is the title of your repository?",
            name: "title"
        },{
            type: "input",
            message: "Please provide a description of your project.",
            name: "description"
        },{
            type: "input",
            message: "What is your GitHub user name?",
            name: "userName"
        },{
            type: "input",
            message: "Please give your GitHub profile link.",
            name: "GitHub"
        },{
            type: "input",
            message: "What is your email?",
            name: "email"
        },{
            type: "list",
            name: "license",
            message: "Please select which license you would like to use.",
            choices : [
                "APACHE 2.O",
                "BSD 3",
                "GVL-GPL 3.0",
                "MIT",
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
        // console.log(response);

        const markdownData = generateMarkdown(response);
        // console.log(markdownData);

        writeToFile("test", markdownData);
    })
}

// Function call to initialize app
init();
