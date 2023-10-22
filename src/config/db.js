const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl).then(()=>{
    console.log('connect to server');
    })
}

module.exports={connectDb}