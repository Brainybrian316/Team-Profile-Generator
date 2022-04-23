// const Employee = require('./lib/Employee');

// var myEmployee = new Employee('John', 1, 'email');

// myEmployee.printStats();

// const generateHTML = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) throw err;
        console.log('Successfully generated/wrote over index.html in the dist folder')
    })
}

// const collectInputs = async (inputs = []) => {
//     const prompts = [{
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is your id #?'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?'
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is your office number?',
//         },
//         {
//             type: 'list',
//             name: 'roles',
//             message: 'Would you like to to next?',
//             choices: ['engineer', 'add intern', 'done']
//         },
//         {
//             type: 'confirm',
//             name: 'again',
//             message: 'Enter another input? ',
//             default: true
//         }
//     ];

//     const {
//         again,
//         ...answers
//     } = await inquirer.prompt(prompts);
//     const newInputs = [...inputs, answers];
//     return again ? collectInputs(newInputs) : newInputs;
// };

// const main = async () => {
//     const inputs = await collectInputs();
//     console.log(inputs);
// };

// main();



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
    {
        type: 'confirm',
        name: 'again',
        message: 'Would you like to add another employee?',
        default: true
    }
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
    {
        type: 'confirm',
        name: 'again',
        message: 'Would you like to add another intern?',
        default: true
    }
]

function addNewRole(role) {
    if (role === 'engineer') {
        inquirer.prompt(engineerPrompts)

    }
    if (role === 'intern') {
        inquirer.prompt(internPrompts)
    }
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
            type: 'confirm',
            name: 'engineer',
            message: 'Would you like to add engineer?',
            default: false,
        },
    ])
    .then(function (data) {
        if (data.engineer) {
            addNewRole('engineer');
        } else {
            const html = generateHTML(data);
            writeToFile('index.html', html);
        }
    });