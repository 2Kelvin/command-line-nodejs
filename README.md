# Nodejs and the command line

There are 2 ways to run a nodejs app:

1. ```node app.js```

   - On the terminal run node(if installed) on your nodejs file (app.js)

2. Adding a nodejs shebang: ```#!/usr/bin/env node``` in your nodejs file (at the top of app.js).
   - Make your nodejs file excutable: `chmod u+x app.js`, then run the file in the terminal `./app.js`

Nodejs can also run strings on the terminal like so:

`node -e "console.log('JavaScript is 🔥')"`

-e flag stands for --eval
