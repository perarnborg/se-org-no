import { hasValidControlDigit } from 'se-ssn';

export const isValidOrgNo = (input) => {
  const isInValidFirstDigit = ['1'].indexOf(input.substr(0, 1)) > -1 // First digit should not be 1

  const isInValidThirdDigit = parseInt(input.substr(2, 1), 10) <= 1 // Third digit should not be 0 or 1

  return !isInValidFirstDigit && !isInValidThirdDigit && hasValidControlDigit(input)
}
