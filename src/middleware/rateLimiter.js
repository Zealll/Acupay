const limiter = require('express-rate-limit')

const rateLimiter = limiter({
    windowMs: 1000,
    max: 1,
    message: 'Too many requests. You have exceeded the 1 request per second limit!',
    header: true
})

module.exports = rateLimiter