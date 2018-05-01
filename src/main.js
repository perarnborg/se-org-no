import * as ssn from './ssn.js';
import * as orgNo from './org-no.js';

const defaultOptions = {
  allowSsn: true,
  ssnMinYears: 18
}

const pattern = /^\d{6}[-|(\s)]{0,1}\d{4}$/

function hasValidPattern(input) {
  return pattern.test(input)
}

export const isValidOrgNo = (input, inputOptions) => {
  const options = {
    ...defaultOptions,
    ...inputOptions
  }

  input = input + ''

  const hasPattern = hasValidPattern(input)

  if (!hasPattern) {
    return false
  }

  input = input.replace(/\D/g, '')

  const isOrgNo = orgNo.isValidOrgNo(input)

  console.log(input, isOrgNo)

  if (!isOrgNo && options.allowSsn) {
    return ssn.isValidSsn(input, options)
  }

  return isOrgNo
}
