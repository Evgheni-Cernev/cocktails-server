const mongoose = require("mongoose");
const connectDb = () => mongoose.connect(`mongodb://mongo:27017/mydb`, { useNewUrlParser: true });

module.exports = {
    connectDb
}