const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

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
    return inquirer.prompt( 
        [
    // Project Title
            {
            type: 'input',
            message: 'What is the title of this Project?',
            name: 'title'
            },

    // Description 
            {
            type: 'input',
            message: 'Breif Description:',
            name: 'description'
            },

    // Installation Instructions
            {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation'
            },

    // Usage Information
            {
            type: 'input',
            message: 'Usage Information:',
            name: 'usage'
            },

    // Contribution Guidelines
            {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'guidelines'
            },
        
    // Test Instructions
            {
            type: 'input',
            message: 'Test Instructions:',
            name: 'testin'
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
            message: 'Github URL:',
            name: 'github'
            },

    // Email Address
            {
            type: 'input',
            message: 'Email Address:',
            name: 'email'
            }
        ]   
    );
}

inqPromise = promptUser();
inqPromise.then(function(data){
    let readME = `
# Title
${data.title}
## Description
${data.description}
## Table of Contents  
    1. Installation(#installation)
    2. Usage(#usage)
    3. License(#license)
    4. Contributing(#guidlines)
    5. Tests(#testin)
    6. Questions(#questions)
    
<a name = 'installation'></a>
## Installation
${data.installation}

<a name = 'usage'></a>
## Usage
${data.usage}

<a name = 'license'></a>
## License
${data.license}

<a name = 'guidelines'></a>
## Contributing
${data.guidelines}

<a name = 'testin'></a>
## Tests
${data.testin}

<a name = 'questions'></a>
## Questions
You can reach me at hitsupod@gmail.com
${data.email}
${data.github}
    `;
    let writePromise = writeFileAsync("ReadME2.md", readME, 'utf8');
    writePromise.then(function() {
        console.log("Completed");
    }).catch(function(error) {
        console.log('Error Found');
        console.log(error);
    })
    // console.log(data.title);
    // console.log(data.github);
    // console.log(data.description);
}).catch(function(error) {
    console.log('Error With Inquirer Prompt ');
    console.log(error);
})


// fs.writeFile("README.md", process.argv[2], function(err) {

  

  //console.log("Success!");

// });
