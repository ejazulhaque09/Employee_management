const mongoose = require("mongoose")
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.url)
    .then(()=> console.log("DataBase connected"))
    .catch(()=> console.log("Issue in connecting to DataBase"))
}

module.exports = dbConnect;