var ssn = require('swedish-ssn')

export const isValidSsn = (input, options) => {
  const isSsn = ssn.validateSwedishSsn(input)

  if (isSsn & options.ssnMinYears) {
    return ssn.calculateAge(input) >= options.ssnMinYears
  }

  return isSsn;
}
