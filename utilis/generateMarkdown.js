// Function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ${renderLicenseBadge(data.license)}
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## [Description](#table-of-contents)
    ${data.what}
    ${data.why}
    ${data.how}
    ## [Installation](#table-of-contents)
    ${data.installation}
    ## [Usage](#table-of-contents)
    ${data.usage}
    
    For more information on how to add screenshots for examples, visit the following website:
    
    [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
    
    ${renderLicenseSection(data.license)}
    ## [Contributing](#table-of-contents)
    
    ${renderContributingSection(data.confirmContributers, data.contribute)}
    ## [Tests](#table-of-contents)
    ${data.test}
    ## [Questions](#table-of-contents)
    Please contact me using the following links:
    [GitHub](https://github.com/${data.githubUsername})
    [Email: ${data.email}](mailto:${data.email})
  `;
  }
  module.exports = generateMarkdown;
