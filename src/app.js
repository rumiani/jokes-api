const express = require('express')
const jokeRouter = require('./routers/joke')

const app = express()

app.use(express.json())

app.use(jokeRouter)


module.exports = app