const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

const multiplyRouter = require('../routes/multiply.js')
const { rateLimiter } = require('../middleware/rateLimiter.js')

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(rateLimiter)


server.use('/api', multiplyRouter)
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        description: err.description || ''
    })
})

module.exports = server

