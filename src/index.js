import 'dotenv/config'
import express from 'express'
import { start } from './app.js'
import { TOKENS } from './constants.js'

try {
  if (!process.env.CHANNEL) throw new Error('CHANNEL is not define.')
  if (!process.env.TOKEN) throw new Error('TOKEN is not define.')
  if (!process.env.MIN) throw new Error('MIN is not define.')
  if (!process.env.MAX) throw new Error('MAX is not define.')
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
