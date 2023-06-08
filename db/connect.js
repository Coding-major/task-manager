const mongoose = require('mongoose')

//const connection = "mongodb://127.0.0.1:27017/blogDB"
const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB