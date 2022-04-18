import { TOKENS } from './constants.js'
import { requestHandler } from './services/requestHandler.js'
import { randomMinMax } from './services/random.js'
import { CHANNELS } from './constants.js'

const start = () => {
  TOKENS.map((token) => {
    const minutes = randomMinMax(7, 10) * 60000
    const timeout = minutes
    setInterval(() => {
      // Evo Land
      requestHandler({ token, channel: CHANNELS[1] })
    }, timeout)
  })
}

export { start }
