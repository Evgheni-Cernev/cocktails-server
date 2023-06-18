const WebSocket = require('ws');
const Message = require('./message');

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  // Handle incoming messages from the client
  ws.on('message', async (data) => {
    try {
      const message = JSON.parse(data);
      const newMessage = new Message({
        sender: message.sender,
        receiver: message.receiver,
        content: message.content
      });
      await newMessage.save();

      // Send the new message to the appropriate recipient
      wss.clients.forEach((client) => {
        if (client !== ws && client.receiver === message.receiver) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(newMessage));
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  });
});