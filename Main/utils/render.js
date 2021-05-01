

function genHTML(teamMembers){
    const html = [];
    // generate html using object method and push to array. store manager first
    html.push(teamMembers.filter(member => member.getRole() === "manager").map(manager => manager.createCard()))
    html.push(teamMembers.filter(member => member.getRole() === "engineer" || member.getRole() === "intern").map(engineer => engineer.createCard()))
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/9fb910411d.js" crossorigin="anonymous"></script>
        <style>
        body{
          padding: 0;
          margin: 0;
        }

        header{
          background-color: azure;
          text-align: center;
          justify-content: center;
          height: 10vw;
        }
      </style>
        <title>Team Page</title>
    </head>
    <body>

    <div class="container">
    ${html.join('')}
    </div>
    </body>
    </html>`
}


module.exports = genHTML;