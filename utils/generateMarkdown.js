// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Contribution for license: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let userLicense = ''
  if(licenseType === 'Apache') {
    userLicense = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (licenseType === 'Boost') {
    userLicense = `![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (licenseType === 'BSD 2') {
    userLicense = `![license: BSD 2-Clause](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (licenseType === 'CC0') {
    userLicense = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
  } else if (licenseType === 'MIT') {
    userLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`  
  } else if (licenseType === 'Mozilla') {
    userLicense = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`    
  } else {
    license.license = "None"
  }
  return userLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let userLicense = ''
  if(licenseType === 'Apache') {
    userLicense = `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'Boost') {
    userLicense = `[Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (licenseType === 'BSD 2') {
    userLicense = `[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (licenseType === 'CC0') {
    userLicense = `[CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
  } else if (licenseType === 'MIT') {
    userLicense = `[MIT](https://opensource.org/licenses/MIT)`  
  } else if (licenseType === 'Mozilla') {
    userLicense = `[MPL 2.0]((https://opensource.org/licenses/MPL-2.0)`   
  } else {
    license.license = "None"
  }
  return userLicense;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license)
  if (license === 'None') {
    return '';
  } else {
    return `Lincensed under ${licenseLink}.`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLogo = renderLicenseBadge(data.licenseLink);
  const licenseWords = renderLicenseSection(data.license)
  return `# ${data.title}
  ${licenseLogo}


# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Instructions](#Instructions)
- [Contributions](#Contributions)
- [Description](#description)
- [Test](#test)
- [License](#license)



## Installation

${data.installastion}

## Usage

${data.usage}


## Credits

${data.credits}

## License

${licenseWords}

---

## How to Contribute

${data.contributions}

## Tests

${data.tests}
`
}
export default generateMarkdown;
