const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String
  }],
  timestamp: { type: Date, default: Date.now }
});

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = {
    MessageModel,
};
