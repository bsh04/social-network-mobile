const express = require('express')
const constants = require('./config.json')
const mongoose = require('mongoose')


const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

const start = async () => {
    try {
        await mongoose.connect(constants.MongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e) {
        console.log(e)
    }
}

start()

app.listen(constants.PORT || 5000, () => console.log('server start'))