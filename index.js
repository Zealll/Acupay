require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT || 5000
const base = process.env.BASE_URL || 'http://localhost:'

server.listen(port, () => {
    console.log(`\n* Server Running on ${base + port} *\n`)
})