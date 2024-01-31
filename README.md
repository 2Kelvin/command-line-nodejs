# Nodejs and the command line

There are 2 ways to run a nodejs app:

1. On the terminal run node(if installed) on your nodejs file (app.js)

   ```
   node app.js
   ```

2. Adding a nodejs shebang in and at the top of your nodejs file. Make sure your nodejs file is excutable: `chmod u+x app.js`, then run the file in the terminal `./app.js`

   ```
   #!/usr/bin/env node
   ```

Nodejs can also run strings on the terminal like so:

`node -e "console.log('JavaScript is 🔥')"`

-e flag stands for --eval
