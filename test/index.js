const assert = require('assert');
const swedishOrgNo = require('../dist/swedish-org-no.cjs');

const validOrgNo1 = '5569565368'
const validOrgNo2 = '5568101520'
const validOrgNo3 = '2520100013'

const inValidOrgNo = '5569565367'

const validSsn = '8109230279'

const ssnWithInvalidLastFour = '8109230200'
const ssnWithInvalidDate = '8109310279'

function orgNoWithDash(input) {
  return input.substr(0, 6) + '-' + input.substr(6)
}

describe('swedishOrgNo.isValidOrgNo', function() {
  it('should pass with valid org nos', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(validOrgNo1), true);
    assert.equal(swedishOrgNo.isValidOrgNo(validOrgNo2), true);
    assert.equal(swedishOrgNo.isValidOrgNo(validOrgNo3), true);
  });

  it('should pass with valid org nos with dash', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(orgNoWithDash(validOrgNo1)), true);
    assert.equal(swedishOrgNo.isValidOrgNo(orgNoWithDash(validOrgNo2)), true);
    assert.equal(swedishOrgNo.isValidOrgNo(orgNoWithDash(validOrgNo3)), true);
  });

  it('should not pass with invalid org no', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(inValidOrgNo), false);
  });

  it('should not pass with valid org no with dash in wrong place', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(inValidOrgNo), false);
  });

  it('should not pass with empty input or incorrect types', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(null), false);
    assert.equal(swedishOrgNo.isValidOrgNo(''), false);
    assert.equal(swedishOrgNo.isValidOrgNo(0), false);
    assert.equal(swedishOrgNo.isValidOrgNo({}), false);
  });

  it('should pass with valid ssn by default', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(validSsn), true);
  });

  it('should not pass with invalid ssn', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(ssnWithInvalidLastFour), false);
    assert.equal(swedishOrgNo.isValidOrgNo(ssnWithInvalidDate), false);
  });

  it('should not pass with valid ssn if options do not allow it', function() {
    assert.equal(swedishOrgNo.isValidOrgNo(validSsn, {allowSsn: false}), false);
  });
});
