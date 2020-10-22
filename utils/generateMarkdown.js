// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description
${data.description}

## Screen Shot
${data.screenShot}

---
### Table of Contents
- [Description](#description)
- [Screen Shot](#screenShot)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Author Info](#author-info)
- [License](#License)
---

## Installation Guide

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Testing

${data.testing}

## Author Info

  ${data.authorName}

  ${data.email}

  ${data.linkedIn}
  

## License
${data.license}
`;

}

module.exports = generateMarkdown;
