'use strict'
const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, files){
        if(err) return callback(err);
        const filterFiles = files.filter(element => ext === path.extname(element) )
       /* files.forEach(element => {
            ext === path.extname(element) ? console.log(element) : null;
        });*/
        callback(null, filterFiles);
    })
}