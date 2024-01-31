#!/usr/bin/env node

// process doesn't need to be imported using require/import
// it's already provided & redy to use in nodejs

// output all command line arguments used to run this file
console.log(process.argv);

// output the USER environment variable
console.log(process.env.USER);

// display the user's home directory
console.log(process.env.HOME);