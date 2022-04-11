import { TOKENS } from './constants.js'
import { requestHandler } from './services/requestHandler.js'
import { randomMinMax } from './services/random.js'

const start = () => {
  TOKENS.map((token) => {
    const timeout = randomMinMax(1, 4) * 60000
    console.log(timeout)
    setInterval(() => {
      requestHandler(token)
    }, timeout)
  })
}

export { start }
