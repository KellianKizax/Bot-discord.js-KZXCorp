# KZX Corp. - Discord bot
 A discord bot writed in JavaScript using discord.js.
 Made for personal purpose and learning.

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
Can be installed with `npm install` in the main folder.

Depencies :
- discord.js
- @discordjs/builders
- @discordjs/rest
- discord-api-types
- axios
- dotenv

Development depencies :
- ESLint

### GNU General Public License version 3
Copyright (C) 2021  Kellian Goffic aka. KellianKizax

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.