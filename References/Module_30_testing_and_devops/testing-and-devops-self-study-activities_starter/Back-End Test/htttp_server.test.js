const supertest = require('supertest');
const app = require ('./http_server'); //<--- needs changes in the file being tested to work, see bottom of that file
const request = supertest(app);

it('Hello World!', async done => {
    expect(1).toBe(1);
    done();
});

var server = app.listen(3000, function() {
    console.log('Running on port 3000');
});

afterAll(done => {
    server.close();
    done();
})
