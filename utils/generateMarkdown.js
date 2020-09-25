// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.title}
  ## Description: 
  ${data.description}
  ##Table of Content: 
  


`;
}

module.exports = generateMarkdown;
