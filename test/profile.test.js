const request = require('supertest');
const app = require('../src/app');

jest.useRealTimers();

test('Should get user profile by user instagram username', async () => {
  const testUserName = 'darkel.com.ng';

  const response = await request(app)
    .get(`/profile/${testUserName}`)
    .send()
    .expect(200);
});
