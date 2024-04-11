// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'MIT') {
 return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
} else if (license === 'Mozilla'){
 return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
} else if (license === 'Apache') {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
} else if (license === 'The Unlicense') {
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
} else if (license === 'GNU') {
 return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
} else {
  return ""
};
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "This project uses the [MIT License] (https://opensource.org/licenses/MIT)."
   } else if (license === 'Mozilla'){
    return "This project usees the [Mozilla License] (https://opensource.org/licenses/MPL-2.0)."
   } else if (license === 'Apache') {
     return "This project uses the [Apache License] (https://opensource.org/licenses/Apache-2.0)."
   } else if (license === 'The Unlicense') {
     return "This project uses the [Unlicense] (http://unlicense.org/)."
   } else if (license === 'GNU') {
    return "This project uses the [GNU] https://www.gnu.org/licenses/gpl-3.0)."
   } else {
    return ""
   };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'No License') {
    return "";
  }

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `## License

  ${licenseBadge}

  ${licenseLink}`;
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseSection = renderLicenseSection(answers.license);
  return `# ${answers.title}

## Table of Contents
- [Description] (#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contribution}

## Tests
${answers.test}

## Questions

GitHub: [${answers.username}](https://github.com/${answers.username})
Email: [${answers.email}](mailto:${answers.email})

${licenseSection}
`;
}

module.exports = generateMarkdown;
