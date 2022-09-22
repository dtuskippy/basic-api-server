'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

// before test, synching database
beforeAll(async () => {
  await sequelizeDatabase.sync();
});

// after test, dropping mock
afterAll(async () => {
  await sequelizeDatabase.drop();
});


describe('Testing REST API', () => {

  test('Create a drinks', async() => {
    let response = await request.post('/drinks').send({
      brand: 'tester',
      category: 'wine',
      alcohol: 'non-alcohol',
    });

    expect(response.status).toEqual(200);
    expect(response.body.brand).toEqual('tester');
    expect(response.body.category).toEqual('wine');
    expect(response.body.alcohol).toEqual('non-alcohol');
  });

  test('Should read from drinks', () => {
    expect(true).toBe(false);
  });

  test('Should update drinks', () => {
    expect(true).toBe(false);
  });

  test('Should delete a drinks', () => {
    expect(true).toBe(false);
  });
  
});
