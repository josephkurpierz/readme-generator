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

function renderLanguageBadge (language) {
  console.log(language[0]);
  const badgeList =[];
  let badgeLink = "";
  for(let i=0; i< language.length; i++){
    if(language[i] == "Node"){
      console.log("node, language name equivalent",language[i]);
      badgeLink = '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)';
      badgeList.push(badgeLink);
    }
    if(language[i] == "HTML"){
      badgeLink = '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)';
      badgeList.push(badgeLink);
    }
    if(language[i] == "JavaScript"){
      badgeLink = '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)';
      badgeList.push(badgeLink);
    }
    if(language[i] == "CSS"){
      badgeLink = '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)';
      badgeList.push(badgeLink);
    }
    if(language[i] == "jQuery"){
      badgeLink = '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)';
      badgeList.push(badgeLink);
    }
    if(language[i] == "Bootstrap"){
      badgeLink = '![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)';
      badgeList.push(badgeLink);
    }
  }
  console.log(badgeList);
  return badgeList;
}

// function renderContributing(check, collaborators){
//   if (!check) {
//     return `
//     none
//     `;
//   }
//   return `
//   ${collaborators}
//   `
// }
//${renderContributing(data.collaboratorsCheck, data.collaborators)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLanguageBadge(data.languages)}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Languages](#languages)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  [github repository](https://github.com/${data.gitUser}/${data.title})

  ${data.usage}

  ## Contributing
  <a href="https://github.com/${data.gitUser}/${data.title}/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=${data.gitUser}/${data.title}"/> </a>

  ## Languages
  ${data.languages}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions can be directed towards ${data.gitUser} at [github profile](https://github.com/${data.gitUser}/)
  Or contact via email: ${data.email}
`;
}

module.exports = generateMarkdown;
