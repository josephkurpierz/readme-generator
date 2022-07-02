// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  if (license == 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
  if (license == 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
  if (license == 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`}
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  if (license == 'Mozilla Public License 2.0') {
    return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`}
  if (license == 'Apache License 2.0') {
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`}
  if (license == 'MIT') {
    return `[${license}](https://choosealicense.com/licenses/mit/)`}
  if (license == 'The Unlicense') {
    return `[${license}](https://choosealicense.com/licenses/unlicense/)`}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `
  ## License 
  ${renderLicenseLink(license)} 

  ${renderLicenseBadge(license)}
  `
}

function renderContributing(check, collaborators){
  if (!check) {
    return "";
  }
  return `
  ## Collaborators
  ${collaborators}

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Languages](#languages)
  - [Contributing](#contributing)
  - [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  [github repository](github.com/${data.link})

  ${data.usage}

  ${renderContributing(data.collaboratorsCheck, data.collaborators)}
  ## Languages
  ${data.languages}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions can be directed towards ${data.link} at [github repository](github.com/${data.link})
  Or contact via email: ${data.email}
`;
}

module.exports = generateMarkdown;
