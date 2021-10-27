# Bot discord.js KZXCorp
 A discord bot writed in JavaScript using discord.js.

### Getting started
#### Installation
- In the main folder do a `npm install`.
- Edit and replace values in `default.env`.
- Rename `default.env` to `.env`.

#### Slash commands deployment
To deploy slash commands on Discord, you can deploy them instantly on your dev server with `node ./src/deploy-dev-commands.js` or on all servers where the bot is present with `node ./src/deploy-global-commands.js`. Beware, deploying globally can take up to 1 hour or more.
The deployment of slash commands is needed when a command is added or modified. 
#### Starting up the bot
You can start the bot with `node .` or `node ./src/index.js`.

### Packages list
Depencies :
- discord.js
- @discordjs/builders
- @discordjs/rest
- discord-api-types
- axios
- dotenv

Development depencies :
- ESLint