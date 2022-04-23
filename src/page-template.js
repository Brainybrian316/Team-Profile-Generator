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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Team Profile Generator</title>
            </head>
            
            <body>
            <h1 class="text-center bg-primary text-white">My Team</h1>
            <div class="container">
            <div class="row">
            <div class="col-10 mx-auto">
            <div class="card-group">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.title}</h6>
            <p class="card-text">ID: ${data.id}</p>
            <p class="card-text">Email: ${data.email}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
            </script>
            </body>
            `
}

module.exports = generateHTML;