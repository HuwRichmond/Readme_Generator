# readme-generator

### Description:

This uses the [Inquirer](https://www.npmjs.com/package/inquirer) Node Package to prompt the user for details in order to generate a ReadMe repositories. It also leverages the [Axios](https://www.npmjs.com/package/axios) Node Package to send an AJAX call to the GitHub API to get the user's avatar, github email and url.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

### Table of Contents:
    
* [Installation](#install) 
* [Usage](#usage) 
* [License](#license) 
* [Contact](#contact)

### Installation:

Once you clone the repo, run npm install in the command line to install the required dependencies (i.e. inquirer and axios).
Make sure you have [node](https://nodejs.org/en/) installed.

### Usage:

Once the app is set up, run node index.js and answer the questions to generate your readme. The only thing that breaks the app is if the username entered doesn't match one found on GitHub. You can just run node index.js again to retry. 

![recording of application being used on terminal".](./Recording.gif) / ! [](./Recording.gif)

URL for deployed application is: https://huwrichmond.github.io/Readme_Generator/
