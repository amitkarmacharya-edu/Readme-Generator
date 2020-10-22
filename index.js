// import
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description'
    },
    {
        type: 'input',
        name: 'screenShot',
        message: 'For screen shots include relative path to the image'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Guide'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Usage notes for the user'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide notes for users who wants to contribute'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide test instructions '
    },
    {
        type: 'input',
        name: 'authorName',
        message: 'Enter your full name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address'
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'Provide a link to linkedIn'
    },
    { 
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["ISC","MIT","EPL 201.0", "APACHE 2.0", "GPL 3.0","LGPL 20v3", "BSD 3", "None"]
    }
    
];

// function prompt user
function promptUser() {

    inquirer.prompt(questions)
    .then((res) => {

        res.screenShot = res.screenShot === ""? "":`![Screen Shot](${res.screenShot})`;
        res.installation = res.installation || "None";
        res.usage = res.usage || "None";
        res.contributing = res.contributing || "NOT CURRENTLY";
        res.license = `![GitHub license](https://img.shields.io/badge/license-${res.license.replace(' ','')}-red.svg)`;
        res.testing = res.testing || "No Testing"
        if(!(res.authorName || res.linkedIn || res.email)) {
            res.authorName = "Unknown";
        }

        readme = generateMarkdown(res);
        writeToFile('README.md', readme);

    })
    .catch((err) => {
        console.log(err);
    });
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./${fileName}`, data)
}

// function to initialize program
function init() {
    promptUser()
}

// function call to initialize program
init();
