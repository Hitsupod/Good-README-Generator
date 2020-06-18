const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

function promptUser() {
    return inquirer.prompt() [
// Project Title
        {
        type: 'input',
        message: 'What is the title of this Project?',
        title: 'title'
        },

// Description 
        {
        type: 'input',
        message: 'Breif Description:',
        title: 'description'
        },

// Installation Instructions
        {
        type: 'input',
        message: 'Installation Instructions:',
        title: 'installation'
        },

// Usage Information
        {
        type: 'input',
        message: 'Usage Information:',
        title: 'usage'
        },

// Contribution Guidelines
        {
        type: 'input',
        message: 'Contribution Guidelines:',
        title: 'guidelines'
        },
    
// Test Instructions
        {
        type: 'input',
        message: 'Test Instructions:',
        title: 'testin'
        },

// License Choice 
        {
        type: "checkbox",
        message: "Which license?",
        name: "license",
        choices: [
        '1',
        '2',
        '3',
        '4'
        ]},

// GitHub Username
        {
        type: 'input',
        message: 'Github:',
        title: 'github'
        },

// Email Address
        {
        type: 'input',
        message: 'Email Address:',
        title: 'email'
        }
    ]
}


// fs.writeFile("README.md", process.argv[2], function(err) {

  

  //console.log("Success!");

// });
