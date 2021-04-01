require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const server = express()

const multiplyRouter = require('../routes/multiply.js')
const jsonDocs = require('../routes/jsonDoc.js')
const rateLimiter = require('../middleware/rateLimiter.js')
const swaggerOptions = require('../../swagger.js')

server.use(express.json())
server.use(helmet())
server.use(cors())

const swaggerDoc = swaggerJsDoc(swaggerOptions)
server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

process.env.DB_ENV != 'test' && server.use(rateLimiter)

server.use('/api', multiplyRouter, jsonDocs)
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        description: err.description || ''
    })
})

module.exports = server

