'use strict'
const dir = process.argv[2];
const typeFile = '.' + process.argv[3];
const mymodule = require('./mymodule.js');

mymodule(dir, typeFile, (err, files) => files.forEach(element => {console.log(element)}));