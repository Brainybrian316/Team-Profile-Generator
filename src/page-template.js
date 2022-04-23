// const Employee = require('../lib/Employee');

// var myEmployee = new Employee('John', 1, 'email');

// myEmployee.printStats();
// console.log(myEmployee);

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Team Profile Generator</title>
            </head>
            
            <body>
            <div class="container">
            <div class="row">
            <div class="col-10 mx-auto">
            <h1 class="text-center">My Team</h1>
            <div class="card-group">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.title}</h6>
            <p class="card-text">${data.id}</p>
            <p class="card-text">${data.email}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </body>
            `
}

module.exports = generateHTML;