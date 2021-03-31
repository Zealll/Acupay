require('dotenv').config()
let url = process.env.BASE_URL || "http://localhost:"
let port = process.env.PORT || 5000

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Acupay API',
            description: "API for Acupay interview",
            contact: {
                name: 'Elan Riznis'
            },
            servers: [url+port]
        }
    },
    apis: ['./routes/documentation.js']
}

module.exports = swaggerOptions