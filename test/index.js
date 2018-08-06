
var should = require('chai').should(),
    parser = require('../chain_parser');

describe('#unescape', function() {
  it('Timelion Query Decoder', function() {
    var testme = parser('.index(_all).timeseries(interval=1m)');
    testme.tree[0].type.should.equal('chain');
  });
});
