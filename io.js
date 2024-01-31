#!/usr/bin/env node

const readLine = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine.question("What's your code name?\n\n", (codeName) => {
    console.log(`\nWelcome ${codeName}!`);
    readLine.close();
});