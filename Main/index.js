// need inquirer to prompt a series of questsions

const inquirer = require('inquirer')
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");



const teamMembers = [];
const idArray = [];

const questions = {

}