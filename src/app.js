import { TOKENS } from './constants.js'
import { requestHandler } from './services/requestHandler.js'
import { randomMinMax } from './services/random.js'
import { CHANNELS } from './constants.js'

const start = () => {
  TOKENS.map((token) => {
    const minutes = randomMinMax(2, 6) * 60000
    const timeout = minutes
    setInterval(() => {
      requestHandler({ token, channel: CHANNELS[0] })
    }, timeout)
  })
}

export { start }
