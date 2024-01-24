// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Elipse":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Perl":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    default:
      return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "[Apache](https://opensource.org/licenses/Apache-2.0)";
    case "Elipse":
      return "[Elipse](https://opensource.org/licenses/EPL-1.0)";
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
    case "Perl":
      return "[Perl](https://opensource.org/licenses/Artistic-2.0)";
    default:
      return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${renderLicenseLink(data.license)} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can reach out to me via GitHub or email:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
