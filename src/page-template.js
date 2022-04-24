// function generateTeamHTML(data) {
//     let savedInput = '';
//     for (let i = 0; i < data.length; i++) {
//         if (data === 'manager') {
//             savedInput += `
//             <div class="card m-3" style="width: 18rem;">
//             <div class="card-body">
//             <h5 class="card-title">${data[i].name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${data[i].role}</h6>
//             <p class="card-text">ID: ${data[i].id}</p>
//             <p class="card-text">Email: ${data[i].email}</p>
//             <p class="card-text">Office Number: ${data[i].officeNumber}</p>
//             </div>
//             </div>
//             `
//         } else if (data === 'engineer') {
//             savedInput += `
//             <div class="card m-3" style="width: 18rem;">
//             <div class="card-body">
//             <h5 class="card-title">${data[i].name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${data[i].role}</h6>
//             <p class="card-text">ID: ${data[i].id}</p>
//             <p class="card-text">Email: ${data[i].email}</p>
//             <p class="card-text">Github: ${data[i].github}</p>
//             </div>
//             </div>
//             `
//         } else if (data === 'intern') {
//             savedInput += `
//             <div class="card m-3" style="width: 18rem;">
//             <div class="card-body">
//             <h5 class="card-title">${data[i].name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${data[i].role}</h6>
//             <p class="card-text">ID: ${data[i].id}</p>
//             <p class="card-text">Email: ${data[i].email}</p>
//             <p class="card-text">School: ${data[i].school}</p>
//             </div>
//             </div>
//             `
//         }
//     }
//     return savedInput;
// }

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateHTML(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        // if (data[i].hasOwnProperty("github")) {
        //     data[i].github;
        // } else {
        //    data[i].school;
        // }
        // }
        if (data[i].roles === "add engineer") {
            data[i].github;
        } else if (data[i].roles === "add intern") {
            data[i].school;
        }
    }
        
        
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
            <script src="https://kit.fontawesome.com/0c923aefe5.js" crossorigin="anonymous"></script>
            <title>Team Profile Generator</title>
            </head>
            
            <body>
            <h1 class="text-center bg-primary text-white">My Team</h1>
            <div class="row d-flex justify-content-evenly p-5 mx-auto">
            <div class="col-3">
            <div class="card-body">
            <h5 class="card-title">${data[0].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">ID: ${data[0].id}</p>
            <p class="card-text">Email: ${data[0].email}</p>
            <p class="card-text">Office Number: ${data[0].officeNumber}</p>
            </div>
            </div>
            <div class="col-3">
            <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">ID: ${data[i].id}</p>
            <p class="card-text">Email: ${data[i].email}</p>
            <p class="card-text">Github: ${data[i].github}</p>
            </div>
            </div>
            <div class="col-3">
            <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">ID: ${data[i].id}</p>
            <p class="card-text">Email: ${data[i].email}</p>
            <p class="card-text">School: ${data[i].school}</p>
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