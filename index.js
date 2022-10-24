// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { Script } = require("vm");

// TODO: Create an array of questions for user input
const questions = ({ name, username, email, title, description, instillation, test, usage, contributing}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>README</title>
</head>
<body>
    <div class="jumbotrom jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Hi, my name is ${name}</h1> <!--connect given content with template literals-->
        <h3>README <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
            <li class="list-group-item">My github username is ${username}</li>
            <li class="list-group-item">Email: ${email}</li>
        </ul>
    </div>

    <div class="container">
        <h1>The project is named ${title}</h1>
        <h2>Project Description:</h2>
            <p>${description}</p>
        <h2>Instillation Instructions</h2>
            <p>${instillation}</p>
        <h2>Command(s) needed to run test(s)</h2>
            <p>${test}</p>
        <h2>Usage Instructions</h2>
            <p>${usage}</p>
        <h2>Contribution Instructions</h2>
            <p>${contributing}</p>
    </div>
</div>
</body>
</html>`;

inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give your project a description."
    },
    {
        type: "list",
        name: "licence",
        message: "What kind of license does your project have?"
        ,choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "BSD 3",
        "None",
        ],
    },
    {
        type: "input",
        name: "instillation",
        message: "What command should be used to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know when contributing to this repo?"
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(customREADME, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("README created")
    });
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
