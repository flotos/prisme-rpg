# Prisme - RPG
An interactive game using Chatbot created with Prisme.ai

Playable on Facebook Messenger, Whatsapp, Prisme.ai interfaces (Mobile app, webchat), and with voice interactions.

Prisme.ai access : https://www.prisme.ai/chatbot?id=jIuZVJJDgK&fullscreen=true

# Usage
This project is only the "webhook" called by the Prisme platform. The NLU is handled by Prisme, while this
project defines the random encounters, battle, and link to the firebase database.
## Current features
This project is still barebone and the technical aspect is undergoing work. Afterward a first batch of 
content will be added.

# Developpers
- Clone the project
- Run the command `npm i`
- Start the dev server with `npm run start:dev`
- start a ngrok tunnel with `npm run tunnel`
- Add the webhook on the *Settings* > *Webhook* section of your Prisme.ai bot.

More details will be added once the base progress, such as an import of a working Prisme bot so you
can create your own.
