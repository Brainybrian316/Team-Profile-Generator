const generateHTML = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

function writeToFile(fileName, data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) throw err;
        console.log('Successfully generated/wrote over index.html in the dist folder')
    })
}

let saveData = [];

const engineerPrompts = [{
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
]

const internPrompts = [{
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
        name: 'school',
        message: 'What is the name of your school?'
    },
]

function addNewRole() {
    inquirer.prompt([{
        type: 'list',
        name: 'roles',
        message: 'Would you like to to next?',
        choices: ['add engineer', 'add intern', 'done']
    }]).then(function (answers) {
        if (answers.roles === 'add engineer') {
            inquirer.prompt(engineerPrompts).then(function (answers) {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                saveData.push(engineer)
                addNewRole();
            })
        } else if (answers.roles === 'add intern') {
            inquirer.prompt(internPrompts).then(function (answers) {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                saveData.push(intern)
                addNewRole();
            })
        } else {
            const html = generateHTML(saveData);
            writeToFile('index.html', html);
        }
    })
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
        }
    ])
    .then(function (data) {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        saveData.push(manager)
        addNewRole()

    })