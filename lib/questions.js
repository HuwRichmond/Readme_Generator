module.exports = [
  {
    type: 'input',
    message: 'Enter your project title: ',
    name: 'title',
    validate: function (titleInput) {
      if (titleInput) {
        return true;
      }
      return false;
    }
  },
  {
    type: 'confirm',
    message: 'Do you want to add a description?',
    name: 'confirmDesc',
    default: false
  },
  {
    type: 'input',
    message: 'Description goes here: ',
    name: 'description',
    validate: function (descInput) {
      if (descInput) {
        return true;
      }
      return false;
    },
    when: function (confirm) {
      return confirm.confirmDesc;
    }
  },
  {
    type: 'confirm',
    message: 'Do you want to add an installation guide?',
    name: 'confirmInstall',
    default: false
  },
  {
    type: 'input',
    message: 'How do we set this up?: ',
    name: 'installation',
    validate: function (installInput) {
      if (installInput) {
        return true;
      }
      return false;
    },
    when: function (confirm) {
      return confirm.confirmInstall;
    }
  },
  {
    type: 'confirm',
    message: 'Do you want to add a usage guide?',
    name: 'confirmUse',
    default: false
  },
  {
    type: 'input',
    message: 'How do I use this?: ',
    name: 'usage',
    validate: function (useInput) {
      if (useInput) {
        return true;
      }
      return false;
    },
    when: function (confirm) {
      return confirm.confirmUse;
    }
  },
  {
    type: 'list',
    message: 'What is your license?',
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'your Github username: ',
    name: 'username',
    validate: function (nameInput) {
      if (nameInput) {
        return true;
      }
      return false;
    }
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: function(emailInput) {
      return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
    }
  },
  {
    type: 'confirm',
    message: 'do you want a table of contents?',
    name: 'confirmTOC'
  }
];