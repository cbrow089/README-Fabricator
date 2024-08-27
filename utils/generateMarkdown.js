// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  switch (license) {
  case 'MIT':
      return 'https://opensource.org/licenses/MIT';
  case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
  case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
  default:
      return '';
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
  }

  return `
  ## License

  This project is licensed under the ${license} license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title} ${renderLicenseBadge(data.license)}
    
  ## Description
  * ${data.description} 
    
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact](#questions)
    
  ## Installation
  * ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributions}
    
  ## Tests
  ${data.tests}
    
  ## Questions
  ${data.questions}
    
  ## Contact
    
  - [GitHub](https://github.com/${data.github})
    
  - Email: ${data.email}
    `;
}

export default generateMarkdown;

