const router = require('express').Router()

const {
    validateContentType,
    validateNumberOfKeys,
    validateTwoKeys,
    validateValueTypes
} = require('../middleware/validation.js')



router.post('/multiply', 
    validateContentType,
    validateNumberOfKeys,
    validateTwoKeys,
    validateValueTypes,
    (req, res, next) => {
    let { num1, num2 } = req.body
    
    try {
        res.status(200).json({
            user_entry_one: num1,
            user_entry_two: num2,
            total: num1 * num2
        })
    } catch(error) {
        next(error)
    }
})

module.exports = router