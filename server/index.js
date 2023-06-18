const express = require("express");
const listEndpoints = require("express-list-endpoints");
const chalk = require("chalk");
const port = 3001;
const app = require("./core/expterss");
const { WS } = require("./routes/api/WS");

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.listen(port, () => console.log(`Server listening on port ${port}`));

WS();

const displayAllEndpoints = () => {
  const endpoints = listEndpoints(app);
  let total = 0;
  console.log(chalk.cyanBright(`\n[*] API Endpoints:`));
  endpoints.forEach(({ path, methods, middleware }) => {
    methods.forEach((method) => {
      total += 1;
      console.log(chalk.gray(`[+] ${method.padEnd(6)}`), chalk.green(path));
    });
  });
  console.log(chalk.cyanBright(`[*] Total: ${total} endpoints`));
};

displayAllEndpoints();
console.log(chalk.green(`\n[*] API server is listening on port ${port}\n`));

global.app = app;
