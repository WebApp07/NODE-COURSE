const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create add command

yargs.command({
  command: "add",
  describe: "Adding a note",
  handler: function () {
    console.log("Note Add!");
  },
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Note remove!");
  },
});

// Create list command

yargs.command({
  command: "",
  describe: "list a note",
  handler: function () {
    console.log("Note list!");
  },
});

// Create read command

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("Note read!");
  },
});

console.log(yargs.argv);
