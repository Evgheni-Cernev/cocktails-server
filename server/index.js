const express = require("express");
const listEndpoints = require("express-list-endpoints");
const chalk = require("chalk");
const port = 3001;
const app = require("./core/expterss");

const { connectDb } = require("./data/db");
connectDb();

// const app = express();


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




// const { WebSocketServer } = require("ws");

// const wss = new WebSocketServer({ port: 3012 });
// // Chatroom

// let numUsers = 0;

// wss.on("connection", (socket) => {
//   let addedUser = false;
  
//   socket.on("message", (data) => {
//     const message = JSON.parse(data);

//     // Handle the received message here
//     console.log("Received message:", message);

//     // Broadcast the message to other clients
//     wss.clients.forEach((client) => {
//       if (client !== socket && client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     });
//   });

//   socket.on("add user", (username) => {
//     if (addedUser) return;

//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit("login", {
//       numUsers: numUsers,
//     });
//     socket.broadcast.emit("user joined", {
//       username: socket.username,
//       numUsers: numUsers,
//     });
//   });

//   socket.on("typing", () => {
//     socket.broadcast.emit("typing", {
//       username: socket.username,
//     });
//   });

//   socket.on("stop typing", () => {
//     socket.broadcast.emit("stop typing", {
//       username: socket.username,
//     });
//   });

//   socket.on("close", () => {
//     if (addedUser) {
//       --numUsers;

//       // echo globally that this client has left
//       socket.broadcast.emit("user left", {
//         username: socket.username,
//         numUsers: numUsers,
//       });
//     }
//   });
// });
