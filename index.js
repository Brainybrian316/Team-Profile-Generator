// const Employee = require('./lib/Employee');

// var myEmployee = new Employee('John', 1, 'email');

// myEmployee.printStats();

const generateHTML = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) throw err;
        console.log('Successfully generated/wrote over index.html in the dist folder')
    })
}

function addNewRole(role) {
    if (role === 'engineer') {
        inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your id #?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'
            },
            //  find a way to add a new role to the array
            // {
            //     type: 'loop',
            //     name: 'confirm',
            //     message: 'Would you like to add another employee?',
            //     choices: ['yes', 'no'],
            //     default: 'no',
            //     when: ({ confirm}) => {
            //         if (confirm) {
            //             return true;
            //         } else {
            //             return false;
            //         }
            //     }


            // } 
        ])
    }
    if (role === 'intern') {}
}

inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id #?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
        {
            type: 'list',
            name: 'roles',
            message: 'Would you like to to next?',
            choices: ['add engineer', 'add intern', 'done']
        }
    ])
    .then(function (data) {
        if (data.roles === 'add engineer') {

        }
        const html = generateHTML(data);
        writeToFile('index.html', html);
    });