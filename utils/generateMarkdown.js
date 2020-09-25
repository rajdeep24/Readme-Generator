// function to generate markdown for README
function generateMarkdown(data) {
	return `
  # Title: ${data.title}
  ## Description: 
  ${data.description}
  ##Table of Content:
  
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

  ###Installation: 
  ${data.installation}
  ###Usage:  
  ${data.usage}
  ##Contributing:
  ${data.contributing}
  ##Tests:
  ${data.tests}

  ##Badges: 
  ![<ALT>](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)
  ##Questions?

  Feel free to reach out to me at: ${data.github}


`;
}

module.exports = generateMarkdown;
