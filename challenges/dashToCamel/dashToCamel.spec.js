var expect = require('chai').expect;
var dashToCamel = require('./dashToCamel.js');

describe('dashToCamel', function() {
  it('returns empty string for undefined', function() {
    //Buildup

    //Execution
    const returnedString = dashToCamel(undefined);

    //Assertation
    expect(returnedString).to.equal('');
  });
});
