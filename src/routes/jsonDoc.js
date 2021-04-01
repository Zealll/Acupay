const router = require('express').Router()

router.get('/json_docs', (req, res, next) => {
    try {
        res.json({data: docObj})
    } catch(error) {
        next(error)
    }
})

let docObj = [
    {
        action: 'Multiply',
        method: 'POST',
        url: '/api/multiply',
        contentType: 'application/json',
        keyLimit: true,
        numKeyLimit: 2,
        reqBodyProperties: [
            {
                key: 'num1',
                type: 'integer'
            },
            {
                key: 'num2',
                type: 'integer'
            }
        ],
        resBodyProperties: [
            {
                key: 'user_entry_one',
                type: 'integer'
            },
            {
                key: 'user_entry_two',
                type: 'integer'
            },
            {
                key: 'total',
                type: 'integer'
            }
        ],
        responses: [
            {
                statusCode: 200,
                description: 'Success'
            },
            {
                statusCode: 400,
                description: 'Object has less than, or more than 2 keys'
            },
            {
                statusCode: 415,
                description: 'Missing, or invalid Content-Type. Invalid JSON'
            },
            {
                statusCode: 422,
                description: 'Invalid key names, and/or invalid value types'
            },
            {
                statusCode: 429,
                description: 'Rate limit of 1 request per second has been reached'
            }
        ]
    }
]

module.exports = router