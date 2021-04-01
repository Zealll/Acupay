const { expect, test } = require('@jest/globals');
const request = require('supertest');
const server = require('../api/server.js')

describe('multiply', () => {
  test('Should only accept JSON object with keys: num1, and num2, which have integers', async () => {
    const response = await request(server)
    .post('/api/multiply')
    .send({
      num1: 50,
      num2: 100
    })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('user_entry_one')
    expect(response.body).toHaveProperty('user_entry_two')
    expect(response.body).toHaveProperty('total')
    expect(response.body.user_entry_one).toBe(50)
    expect(response.body.user_entry_two).toBe(100)
    expect(response.body.total).toBe(5000)
  })
  
  test('Should return 415 error for wrong content-type', async () => {
    const response = await request(server)
    .post('/api/multiply')
    .set('Content-Type', 'application/xml')
    
    expect(response.status).toBe(415)
  })

  test('Returns 400 error if the number of keys is less than, or more than 2', async () => {
    const response = await request(server)
    .post('/api/multiply')
    .send({
      num1: 100,
      num2: 300,
      num3: 1
    })

    expect(response.status).toBe(400)
  })

  test('Returns 422 error if one, or both keys aren\'t named "num1", and "num2" respectively', async () => {
    const response = await request(server) 
    .post('/api/multiply')
    .send({
      num3: 7,
      num1: 3
    })

    expect(response.status).toBe(422)
  })

  test('Returns 422 if one, or both of the values aren\'t integers', async () => {
    const response = await request(server)
    .post('/api/multiply')
    .send({
      num1: '1',
      num2: []
    })

    expect(response.status).toBe(422)
  })
})