const { WebSocketServer } = require("ws");

module.exports.WS = () => {
  const wss = new WebSocketServer({ port: 3012 });

  let numUsers = 0;

  wss.on("connection", (socket) => {
    let addedUser = false;

    socket.on("message", (data) => {
      const message = JSON.parse(data);

      console.log("Received message:", message);

      wss.clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });

    socket.on("add user", (username) => {
      if (addedUser) return;

      socket.username = username;
      ++numUsers;
      addedUser = true;
      socket.emit("login", {
        numUsers: numUsers,
      });
      socket.broadcast.emit("user joined", {
        username: socket.username,
        numUsers: numUsers,
      });
    });

    socket.on("typing", () => {
      socket.broadcast.emit("typing", {
        username: socket.username,
      });
    });

    socket.on("stop typing", () => {
      socket.broadcast.emit("stop typing", {
        username: socket.username,
      });
    });

    socket.on("close", () => {
      if (addedUser) {
        --numUsers;

        // echo globally that this client has left
        socket.broadcast.emit("user left", {
          username: socket.username,
          numUsers: numUsers,
        });
      }
    });
  });
};
