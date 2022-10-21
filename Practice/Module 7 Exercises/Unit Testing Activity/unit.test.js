const { describe } = require("node:test");

describe('greet function', function() {
    it ('should be called', function() {
        expect(greet('Nobody')).toBeCalled();
    });

    it ('should greet a person', function() {
        expect(greet('Elizabeth')).toReturn('Hello Elizabeth.');
    });

    it ('should handle null values', function() {
        expect(greet()).toReturn('Hello there!');
    });

    it ('should handle two names', function() {
        expect(greet(['Mary','Sue'])).toReturn('Hello Mary, Sue.');
    });

    it ('should handle an arbitrary number of names', function() {
        expect(greet(['Oscar','Yan','Nugget','Bob'])).toReturn
        ('Hello Oscar, Yan, Nugget, Bob.');
    });
});