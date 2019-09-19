import { hasValidPattern, isValidSsn } from 'se-ssn';
import * as orgNo from './org-no';

const defaultOptions = {
  allowSsn: true,
  ssnMinYears: 16
}

export const isValidOrgNo = (input, inputOptions) => {
  const options = Object.assign(
    {},
    defaultOptions,
    inputOptions
  )

  input = input + ''

  const hasPattern = hasValidPattern(input)

  if (!hasPattern) {
    return false
  }

  input = input.replace(/\D/g, '')

  const isOrgNo = orgNo.isValidOrgNo(input)

  if (!isOrgNo && options.allowSsn) {
    return isValidSsn(input, options)
  }

  return isOrgNo
}

export const isValidSwedishOrgNo = isValidOrgNo
