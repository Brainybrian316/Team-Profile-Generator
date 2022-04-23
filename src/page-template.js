function generateTeamHTML(data) {
    let teamHTML = ' ok data';
    for (let i = 0; i < data.length; i++) {
        if (data[i].role === 'Manager') {
            ` <div class="card bg-info">
            <div class="card-body">
            <h5 class="card-title fs-1">${data.name}</h5>
            <h6 class="card-subtitle mb-2  fs-3 text-muted border-bottom border-2">Manager</h6>
            <p class="card-text p-1 fs-5">ID: ${data.id}</p>
            <p class="card-text fs-5">Email: ${data.email}</p>
            <p class="card-text fs-5">Office Number: ${data.officeNumber}</p>
            </div>
            </div>`
            console.log(data[i]);
        } else if (data[i].role === 'Engineer') {
            console.log(data[i]);
        } else if (data[i].role === 'Intern') {
            console.log(data[i]);
        }

    }
    return teamHTML;
}


function generateHTML(data) {
    console.log(data);

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
            ${generateTeamHTML(data)}
            </div>
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
            </script>
            </body>
            `
}

module.exports = generateHTML;