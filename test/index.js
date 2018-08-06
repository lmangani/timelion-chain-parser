
var should = require('chai').should(),
    parser = require('../chain_parser');

describe('Parser', function() {
  it('Timelion Chain Decoder', function() {
    var testme = parser('.index(_all).timeseries(interval=1m)');
    testme.tree[0].type.should.equal('chain');
  });
});
