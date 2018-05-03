const assert = require('assert');
const seOrgNo = require('../dist/se-org-no.cjs');

const validOrgNo1 = '5569565368'
const validOrgNo2 = '5568101520'
const validOrgNo3 = '2520100013'

const inValidOrgNo = '5569565367'

const validSsn = '8101013608'

const ssnWithInvalidControlDigit = '8101013600'
const ssnWithInvalidDate = '8109310989'

function orgNoWithDash(input) {
  return input.substr(0, 6) + '-' + input.substr(6)
}

describe('seOrgNo.isValidOrgNo', function() {
  it('should pass with valid org nos', function() {
    assert.equal(seOrgNo.isValidOrgNo(validOrgNo1), true);
    assert.equal(seOrgNo.isValidOrgNo(validOrgNo2), true);
    assert.equal(seOrgNo.isValidOrgNo(validOrgNo3), true);
  });

  it('should pass with valid org nos with dash', function() {
    assert.equal(seOrgNo.isValidOrgNo(orgNoWithDash(validOrgNo1)), true);
    assert.equal(seOrgNo.isValidOrgNo(orgNoWithDash(validOrgNo2)), true);
    assert.equal(seOrgNo.isValidOrgNo(orgNoWithDash(validOrgNo3)), true);
  });

  it('should not pass with invalid org no', function() {
    assert.equal(seOrgNo.isValidOrgNo(inValidOrgNo), false);
  });

  it('should not pass with valid org no with dash in wrong place', function() {
    assert.equal(seOrgNo.isValidOrgNo(inValidOrgNo), false);
  });

  it('should not pass with empty input or incorrect types', function() {
    assert.equal(seOrgNo.isValidOrgNo(null), false);
    assert.equal(seOrgNo.isValidOrgNo(''), false);
    assert.equal(seOrgNo.isValidOrgNo(0), false);
    assert.equal(seOrgNo.isValidOrgNo({}), false);
    assert.equal(seOrgNo.isValidOrgNo('a'), false);
    assert.equal(seOrgNo.isValidOrgNo('a111111111'), false);
  });

  it('should pass with valid ssn by default', function() {
    assert.equal(seOrgNo.isValidOrgNo(validSsn), true);
  });

  it('should not pass with invalid ssn', function() {
    assert.equal(seOrgNo.isValidOrgNo(ssnWithInvalidControlDigit), false);
    assert.equal(seOrgNo.isValidOrgNo(ssnWithInvalidDate), false);
  });

  it('should not pass with valid ssn if options do not allow it', function() {
    assert.equal(seOrgNo.isValidOrgNo(validSsn, {allowSsn: false}), false);
  });

  it('should pass with valid org nos even if options do not allow ssn', function() {
    assert.equal(seOrgNo.isValidOrgNo(validOrgNo1, {allowSsn: false}), true);
    assert.equal(seOrgNo.isValidOrgNo(validOrgNo2, {allowSsn: false}), true);
    assert.equal(seOrgNo.isValidOrgNo(validOrgNo3, {allowSsn: false}), true);
  });
});
