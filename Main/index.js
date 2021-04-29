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
        console.log(mgr)
        console.log(mgr.getRole())
        teamMembers.push(mgr);
        idArray.push(mgr.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function createEngineer(role) {}

  function createFile(data) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, genHTML(data), "utf-8");
  }

  createManager();
}

init();
