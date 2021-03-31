/**
 * @swagger
 *  paths:
 *    /api/multiply:
 *      post:
 *        description: Multiply two numbers and return total
 *        consumes:
 *          - application/json
 *        produces:
 *          - application/json
 *        parameters:
 *        - in: body
 *          name: NumbersObject
 *          schema:
 *              type: object
 *              required:
 *              - num1
 *              - num2
 *              properties:
 *                  num1:
 *                      type: integer
 *                      example: 5
 *                  num2:
 *                      type: integer
 *                      example: 10
 *        responses:
 *          200:
 *              description: Success
 *          400: 
 *              description: Number of keys in the object is less than, or more than 2
 *          415:
 *              description: No Content-Type on Header, or media provided is not JSON
 *          422:
 *              description: Keys ["num1" and/or "num2"] are missing, or thir values are not integers
 *          429:
 *              description: Rate limit of 1 request per second has been reached
 */