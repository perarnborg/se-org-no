export const isValidOrgNo = (input, options) => {
  const isValidFirstDigit = ['2', '5', '7', '8', '9'].indexOf(input.substr(0, 1)) > -1

  return isValidFirstDigit
}
