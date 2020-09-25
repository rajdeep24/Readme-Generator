// function to generate markdown for README
function generateMarkdown(data) {
	return `
  # Title: ${data.title}
  
  ## Description: 
  ${data.description}

  ## Links: 

  Github Pages URL: <${data.githubUrl}> 

  GitHub Repository URL: <${data.githubRepo}>

  ## Table of Content:

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation: 
  ${data.installation}

  ## Usage:  
  ${data.usage}

  ## Contributing:
  ${data.contribution}

  ## Tests:
  ${data.tests}

  ## Badges: 
  ![<ALT>](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)


  ##Questions?

  Feel free to reach out to me at: github.com/${data.github}


`;
}

module.exports = generateMarkdown;
