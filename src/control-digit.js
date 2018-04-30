function getControlDigit(input) {
  const digits = input.substr(9).split()

  let factor
  const factoredDigits = digits.map((d) => {
    factor = factor === 1 ? 2 : 1
    return parseInt(d) * factor + ''
  })

  const sum = factoredDigits.reduce((s, d) => {
    const partSum = d.split().reduce((ps, pd) => {
      return ps + parseInt(pd, 0)
    })

    return s + partSum
  })

  const controlDigit = 10 - sum % 10

  return controlDigit < 10 ? controlDigit : 0
}

export const hasValidControlDigit = (input) => {
  return input.substr(9) === getControlDigit(input) + ''
}
