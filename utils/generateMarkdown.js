// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  const badgeUrl = String(license).split(" ").join("%20");
  return `
  ![${license} license badge](https://img.shields.io/badge/license-${badgeUrl}-green)
  `
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Languages](#languages)
  - [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.link}
  ${data.usage}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
