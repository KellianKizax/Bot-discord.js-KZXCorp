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
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag} !`);
});


// Bot Commands
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

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
