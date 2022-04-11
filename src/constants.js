const MESSAGE = [
  'ปั่นๆ',
  'ซู้ดๆ',
  '🔥',
  ':v_tone2: ',
  ':love_you_gesture_tone1:',
]
const CHANNEL = process.env.CHANNEL
const ROOM = process.env.ROOM
const BASE_URL = `https://discord.com/channels/${CHANNEL}/${ROOM}`
const TOKENS = [process.env.TOKEN_P_OHM, process.env.TOKEN_I_ART]

export { MESSAGE, CHANNEL, ROOM, BASE_URL, TOKENS }
