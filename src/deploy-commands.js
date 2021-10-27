/*
filename : deploy-commands.js
description : Script used to register and update the slash commands for the bot.
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
const guildId = process.env.GUILD_ID;


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.CLIENT_TOKEN);

// For guild only deployment
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
