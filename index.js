// const Employee = require('./lib/Employee');

// var myEmployee = new Employee('John', 1, 'email');

// myEmployee.printStats();

const generateHTML = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'title',
            message: 'What is your title?',
            choices: ['Manager', 'Engineer', 'Intern']
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
        }
    ])

    .then(function (data) {
        console.log(data);
        fs.writeFile('index.html', generateHTML(data), function (err) {
            if (err) {
                throw err;
            }
            console.log('Success!');
        })
    })