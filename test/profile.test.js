const request = require('supertest');
const app = require('../src/app');

test('Should get user profile by user instagram username', async () => {
  const testUserName = 'darkel.com.ng';

  jest.setTimeout(30000);

  const response = await request(app)
    .get(`/profile/${testUserName}`)
    .send()
    .expect(200);
});
