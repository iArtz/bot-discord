import { MESSAGE } from '../constants.js'

export const randomMinMax = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomWord = () => {
  return MESSAGE[randomMinMax(0, 13)]
}
