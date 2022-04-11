export const nonce = () => {
  return parseInt((Math.random() * 9 + 1) * Math.pow(10, 18 - 1), 10)
}
