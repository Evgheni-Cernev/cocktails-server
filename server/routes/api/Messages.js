const senderSocket = new WebSocket('ws://localhost:3000');
const receiverSocket = new WebSocket('ws://localhost:3000');

senderSocket.addEventListener('open', (event) => {
  console.log('Sender WebSocket connection established');
});

receiverSocket.addEventListener('open', (event) => {
  console.log('Receiver WebSocket connection established');
});

senderSocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  console.log('Sender received message:', message);
  // Handle the received message on the sender-side
});

receiverSocket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  console.log('Receiver received message:', message);
  // Handle the received message on the receiver-side
});

// Send a message from the sender to the receiver
const message = {
  sender: 'Sender',
  receiver: 'Receiver',
  content: 'Hello, Receiver!'
};
senderSocket.send(JSON.stringify(message));