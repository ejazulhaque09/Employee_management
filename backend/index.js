const express = require('express')
const dbConnect = require('./config/database')
require('dotenv').config();
const routes = require('./routes/routes')
const app = express();
const port = process.env.port;
var cors = require('cors')
app.use(
    cors({
        origin: "*",
    })
)
app.listen(port, () => {
    console.log("Server Started")
})
dbConnect();
app.use(express.json())
app.use("/base",routes)