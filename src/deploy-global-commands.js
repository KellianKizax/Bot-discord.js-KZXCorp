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
