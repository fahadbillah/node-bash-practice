#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const chalk = require('chalk');

var argv = [];
const templatePath = './template';

var _readArgs = function(){
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
      });

      // console.log(chalk.red.bgYellow.bold(process.argv.slice(2)[index+1]));
    // } else {
    //   console.log(chalk.blue(argument));
    }
  });
};

var _createFolder = function() {
  mkdirp('/output/' + argv[0].value, function (err) {
    if (err) console.error(chalk.red(err))
    else console.log(chalk.green('pow!'))
  });
};

var _init = function() {
  _readArgs();
  _createFolder();
};

_init();

console.log(argv[0]);

// console.log(chalk.blue('Hello world!'));