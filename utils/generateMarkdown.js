// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Contribution for license: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {

  if(license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
   
  } if (license === 'Boost') {
    return '![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
   
  } if (license === 'BSD 2') {
    return '![license: BSD 2-Clause](https://img.shields.io/badge/License-GPL-blue.svg)';
   
  } if (license === 'CC0') {
    return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
   
  } if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
     
  } if (license === 'Mozilla') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
       
  } if (!license){
    return ""
  }
 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license === 'Apache') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';

  } if (license === 'Boost') {
    return '[Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)';

  } if (license === 'BSD 2') {
    return '[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)';

  } if (license === 'CC0') {
    return '[CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';

  } if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';

  } if (license === 'Mozilla') {
    return '[MPL 2.0]((https://opensource.org/licenses/MPL-2.0)';

  } if (!license) {
    return "";
  }
 
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This app is covered by a ${license} license. For more information please checkout this link ${renderLicenseBadge(license)}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



## Description

${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributions](#Contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## License

${renderLicenseSection(data.license)}

---

## Contributions

${data.contributions}

## Tests

${data.tests}

## Questions
If you have any questions, feel free to contact me at ${data.email} or visit my projects at https://github.com/${data.github}.
`
}
module.exports = generateMarkdown;
