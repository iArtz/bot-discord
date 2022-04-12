import fetch from 'node-fetch'

import { BASE_URL } from '../constants.js'
import { nonce } from '../services/nonceGenereate.js'
import { randomWord } from './random.js'

const requestHandler = ({ token, channel, room }) => {
  const json = {
    content: randomWord(),
    nonce: nonce(),
    tts: false,
  }

  const body = JSON.stringify(json)
  const config = {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9,th;q=0.8',
      authorization: token,
      'content-type': 'application/json',
      'sec-ch-ua': 'Not A;Brand;v=99, Chromium;v=98, "Google Chrome";v=98',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-debug-options': 'bugReporterEnabled',
      'x-discord-locale': 'en-US',
    },
    referrer: `${BASE_URL}/${channel}/${room}`,
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: body,
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }
  const response = fetch(
    'https://discord.com/api/v9/channels/' + channel + '/messages',
    config
  )
    .then((res) => res.json())
    .then((data) =>
      console.table([data.content, data.author.username, data.channel_id])
    )
    .catch((error) => console.log(error))
}

export { requestHandler }
