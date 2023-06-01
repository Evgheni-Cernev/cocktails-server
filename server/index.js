const express = require("express");
const listEndpoints = require("express-list-endpoints");
const chalk = require("chalk");
const { connectDb } = require("./data/db");
connectDb();
const port = 3001;
const app = require("./core/expterss");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server listening on port ${port}`));

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
