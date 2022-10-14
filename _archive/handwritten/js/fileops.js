

var fs = require("fs");

/*
// Asynchronous read
fs.readFile('copy_score_defs_2022-07-12_18_33.json', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data);
});*/


// Synchronous read
var data = fs.readFileSync('copy_score_defs_2022-07-12_18_33.json');
console.log("Synchronous read: " + data);

console.log("Program Ended");