const express = require('express')

const searchRouter = require('./search')
const server = express()

server.use('/',searchRouter)

module.exports = server