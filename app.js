const express = require("express");
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config()
const notFound = require("./middlewares/not-found")
//const errorHandlerMiddleware = require('./middlewares/error-handler');

//middleware
app.use(express.static('./public'))
app.use(express.json());


//route

app.use('/api/v1/tasks', tasks)
app.use(notFound);
//app.use(errorHandlerMiddleware);

 
// connection
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening to port ${port}.....`))
    } catch (err) {
        console.log(err)
    }
}

start()

