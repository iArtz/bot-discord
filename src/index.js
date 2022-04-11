import 'dotenv/config'
import express from 'express'
import { start } from './app.js'

try {
  if (!process.env.CHANNEL) throw new Error('CHANNEL is not define.')
  if (!process.env.ROOM) throw new Error('ROOM is not define.')
  if (!process.env.TOKEN_P_OHM) throw new Error('TOKEN_P_OHM is not define.')
  if (!process.env.TOKEN_I_ART) throw new Error('TOKEN_I_ART is not define.')
  start()
  const app = express()

  app.get('/', (req, res) => {
    res.send('Online')
  })
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Start ${PORT}`)
  })
} catch (e) {
  console.log(e)
}
