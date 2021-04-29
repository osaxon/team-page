// need inquirer to prompt a series of questsions
const genHTML = require("./utils/render.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const TeamMembers = require("./utils/teamMembers.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

function init() {
  // Uses inquirer to get responses and creates an instance of the Manager object and pushes to array
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the Managers name",
          name: "name",
        },
        {
          type: "input",
          message: "What is the ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What's their email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is the office location number?",
          name: "office",
        },
      ])
      .then((res) => {
        const mgr = new TeamMembers.manager({
          name: res.name,
          id: res.id,
          email: res.email,
          office: res.office,
        });
        teamMembers.push(mgr);
        idArray.push(mgr.id);
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function createEngineer() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Engineers name",
        name: "name",
      },
      {
        type: "input",
        message: "What is the ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What's their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the GitHub name",
        name: "github",
      },
    ])
    .then((res) => {
      const eng = new TeamMembers.engineer({
        name: res.name,
        id: res.id,
        email: res.email,
        github: res.github,
      });
      teamMembers.push(eng);
      idArray.push(eng.id);
      createFile(teamMembers);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function next(){
      inquirer.prompt([
          {
            type: 'list',
            name: 'addMember',
            message: "Add a team member",
            choices: ["Engineer", "Intern"]
          }
      ])
      .then((res) => {
          switch(res.addMember){
              case "Engineer":
                  createEngineer();
                  break;
              case "Intern":
                  createIntern();
                  break;
              default:
                  return;
          }
      })
      .catch((err) => {
          console.log(err)
      })
  }

  function createFile(teamMembers) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, genHTML(teamMembers), "utf-8");
  }

  createManager();
}

init();
