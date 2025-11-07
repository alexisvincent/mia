import BeeperDesktop from '@beeper/desktop-api';

const client = new BeeperDesktop({
  accessToken: process.env.BEEPER_ACCESS_TOKEN,
  baseURL: "https://apollo.emperor-banfish.ts.net/"
});


export async function latest() {
  const page = await client.chats.search({ includeMuted: true, limit: 3, type: 'single' });
  const chat = page.items[0];

  console.log(chat.id);

  return chat
}
