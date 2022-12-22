import { TOKENS } from './constants.js'
import { requestHandler } from './services/requestHandler.js'
import { randomMinMax } from './services/random.js'
import { CHANNELS } from './constants.js'

const start = () => {
  TOKENS.map((token) => {
    requestHandler({ token, channel: CHANNELS[0] })
    const minutes = randomMinMax(30, 60) * 60000
    const timeout = minutes
    setInterval(() => {
      requestHandler({ token, channel: CHANNELS[0] })
    }, timeout)
  })
}

export { start }
