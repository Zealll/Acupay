const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

const multiplyRouter = require('../routes/multiply.js')

server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api', multiplyRouter)
server.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
        description: err.description || ''
    })
})

module.exports = server

