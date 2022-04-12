import { TOKENS } from './constants.js'
import { requestHandler } from './services/requestHandler.js'
import { randomMinMax } from './services/random.js'
import { CHANNELS, ROOMS } from './constants.js'

const start = () => {
  TOKENS.map((token) => {
    const timeout = randomMinMax(1, 4) * 60000
    setInterval(() => {
      requestHandler({ token, channel: CHANNELS[0], room: ROOMS[0] })
    }, timeout)
    setInterval(() => {
      requestHandler({ token, channel: CHANNELS[1], room: ROOMS[1] })
    }, timeout)
  })
}

export { start }
