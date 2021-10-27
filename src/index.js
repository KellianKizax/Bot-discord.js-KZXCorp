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
filename : index.js
description : Main file of the bot.
author : KellianKizax
creation date : 27/10/2021
*/

// IMPORTS / REQUIRES
require('dotenv').config();


// GLOBAL CONSTANTS
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.commands = new Collection();
// Dinamically retrive command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Add commands to the client
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


// Bot Ready
client.once('ready', c => {
	console.log(`Logged in as ${c.user.tag} !`);
});


// Bot Commands
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	console.log(
		'[', interaction.member.guild.name, ']',
		interaction.user.username, ':',
		interaction.commandName);

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Bot Login
client.login(process.env.CLIENT_TOKEN);
