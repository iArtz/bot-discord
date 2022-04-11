import 'dotenv/config'
import { start } from './app.js'

try {
  if (!process.env.CHANNEL) throw new Error('CHANNEL is not define.')
  if (!process.env.ROOM) throw new Error('ROOM is not define.')
  if (!process.env.TOKEN_P_OHM) throw new Error('TOKEN_P_OHM is not define.')
  if (!process.env.TOKEN_I_ART) throw new Error('TOKEN_I_ART is not define.')
  start()
} catch (e) {
  console.log(e)
}
