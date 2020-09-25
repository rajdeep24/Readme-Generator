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
		name: "description",
	},
	{
		type: "input",
		message: "What is the github pages url of your app?",
		name: " githubUrl",
	},
	{
		type: "input",
		message: "What is the github repo url of your app?",
		name: "githubRepo",
	},
	{
		type: "input",
		message: "What steps did you take to install your application?",
		name: "installation",
	},
	{
		type: "input",
		message: "Describe how to use your application.",
		name: "usage",
	},
	{
		type: "input",
		message: "List the who contributed to building this application",
		name: "contribution",
	},
	{
		type: "input",
		message: "What is your github username?",
		name: "github",
	},
];

// function to write README file
function writeToFile(data) {
	fs.writeFile("./output/readme.md", data, function (err) {
		if (err) throw err;
		console.log("Successfully created readme.md!");
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
