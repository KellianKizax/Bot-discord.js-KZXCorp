/*
KZX Corp. - Discord Bot
Made for personal purpose and learning.
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
*/

/*
filename : deploy-global-commands.js
description : Script used to register and update the slash commands for the bot in all guilds (can take more than 1 hour).
author : KellianKizax
creation date : 27/10/2021
*/

// IMPORTS / REQUIRES
require('dotenv').config();

// GLOBAL CONSTANTS
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId = process.env.CLIENT_ID;


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(process.env.CLIENT_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands (global scope).');
		console.time('Elapsed time');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands (global scope).');
		console.timeEnd('Elapsed time');
	}
	catch (error) {
		console.error(error);
	}
})();
