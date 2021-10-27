/*
filename : ping.js
description : Replies with Pong!.
author : KellianKizax
creation date : 27/10/2021
*/

// GLOBAL CONSTANT
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
