const fileSystem = require("fs");

fileSystem.writeFileSync("notes.txt", "My name is Amine.!");
fileSystem.appendFileSync("notes.txt", " We should learn Cyber Security.");
