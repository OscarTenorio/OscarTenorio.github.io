# littletiers
little tiers

NOTE: in package.json, I made a change to the "test" value to use jest, invkoed by running:
    npm test
At the time of this writing (the beginning of the module lesson), there are no testing files - the error I'm getting then is this:
    No tests found, exiting with code 1
If you see that error, make sure that there are testing files created

NOTE: the listener in http_server.js (bottom of the file) was commented out, and an app export was added to the bottom of the file to get the test to acccess the server. This MAY be a Supertest thing specifically