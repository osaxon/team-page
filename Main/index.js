// need inquirer to prompt a series of questsions
const genHTML = require('./utils/render.js');
const inquirer = require('inquirer')
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

if(!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath,genHTML,"utf-8");

const teamMembers = [];
const idArray = [];

const questions = {

}