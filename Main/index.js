// need inquirer to prompt a series of questsions
const genHTML = require("./utils/render.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const TeamMember = require("./utils/teamMembers.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

const manager = new TeamMember({ name: "oli", role: "Manager" });

teamMembers.push(manager);
console.log(teamMembers);

function init() {
  function createManager() {
    inquirer
      .prompt({
        type: "input",
        message: "Enter the Managers name",
        name: "name",
      })
      .then((res) => {
        const mgr = new TeamMember({ name: res.name });
        createFile(mgr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createManager();

  function createFile(data) {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, genHTML(data), "utf-8");
  }
}

init();
