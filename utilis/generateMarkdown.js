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
    