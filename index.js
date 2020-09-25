const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkDown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
	{
		type: "input",
		message: "What is the title of your application?",
		name: "title",
	},
	{
		type: "input",
		message: "Describe your application",
		name: "toc",
	},
	{
		type: "input",
		message: "Describe your application",
		name: "description",
	},
];

// function to write README file
function writeToFile(data) {
	fs.writeFile("./output/readme.md", data, function () {
    if (err) throw err; 
    console.log("Successfully created readme.md!")
	});
}

// function to initialize program
function init() {
	inquirer.prompt(questions).then(function (response) {
		const generateMd = generateMarkDown(response);
		writeToFile(generateMd);
	});
}

// function call to initialize program
init();
