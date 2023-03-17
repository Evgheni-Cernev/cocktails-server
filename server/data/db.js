const mongoose = require("mongoose");
const connectDb = () => mongoose.connect(`mongodb+srv://evgheni:YRxMmJb8zQBtNRZ7@cluster0.tm48f.mongodb.net/?retryWrites=true&w=majority`, {  useNewUrlParser: true, useUnifiedTopology: true,});

module.exports = {
    connectDb
}