const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/route')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://gautam:gautam123@cluster0.xorxp.mongodb.net/myAssign_2',{

})
.then(() => console.log('MongoDB is connected successfully..'))
.catch((err) => console.log(err))


app.use('/', router)

app.listen(process.env.PORT || 3000, function(){
    console.log('Server is connected on port 3000')
})