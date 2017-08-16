#!/usr/bin/env node

const chalk = require('chalk');

var argv = [];

(function(){
  process.argv.slice(2).forEach(function (argument, index) {
    console.log(argument)
    // console.log(index)
    // argv.push(argument);
    if (index === 0) {
      argv[0] = {
        option: 'projectName',
        value: argument
      };
    }
    else if (argument.indexOf('-') === 0) {
      var a = argument.replace(/^-*/, '');
      argv.push({
        option: a,
        value: process.argv.slice(2)[index+1]
      })

      // console.log(chalk.red.bgYellow.bold(process.argv.slice(2)[index+1]));
    // } else {
    //   console.log(chalk.blue(argument));
    }
  });
})();

console.log(argv);

// console.log(chalk.blue('Hello world!'));