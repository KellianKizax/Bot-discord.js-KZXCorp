/*
filename : index.js
description : Main file of the bot.
author : KellianKizax
creation date : 27/10/2021
*/

// IMPORTS / REQUIRES
require('dotenv').config();


// GLOBAL CONSTANTS
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// Bot Ready
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag} !`);
});

// Bot Commands
client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('Pong!');
	}
});

// Bot Login
client.login(process.env.CLIENT_TOKEN);
