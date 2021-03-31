const validateContentType = (req, res, next) => {
    let contentType = req.headers['content-type']

    if(!contentType || contentType.toLowerCase() != 'application/json') {
        next({
            status: 415,
            message: 'Invalid JSON',
            description: 'Missing "Content-Type" from headers, and/or invalid media type. Expected JSON object.'
        })
    } else {
        next()
    }
}

const validateNumberOfKeys = (req, res, next) => {
    if (Object.keys(req.body).length != 2) {
        next({
            status: 400,
            message: 'Wrong number of Keys',
            description: 'Please provide only two keys (num1, num2) with their corresponding values. EX: {num1: 5, num2: 10}'
        })
    } else {
        next()
    }
}

const validateTwoKeys = (req, res, next) => {
    let { num1, num2 } = req.body

    if (!num1 || !num2) {
        let [ key1, key2 ] = Object.keys(req.body)

        next({
            status: 422,
            message: 'Missing required keys, and/or their corresponding values.',
            description: `Server expected two keys: "num1" and "num2" with their corresponding values. Instead got: "${key1}" and "${key2}"`
        })
    } else {
        next()
    }
}

const validateValueTypes = (req, res, next) => {
    let { num1, num2 } = req.body

    let value_is_num = (typeof(num1) == 'number' && typeof(num2) == 'number')

    if (!value_is_num) {
        next({
            status: 422,
            message: 'Values can\'t be multiplied',
            description: 'Both values provided must be integers'
        })
    } else {
        next()
    }
}

module.exports = {
    validateContentType,
    validateNumberOfKeys,
    validateTwoKeys,
    validateValueTypes
}