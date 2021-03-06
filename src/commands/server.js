/*
filename : server.js
description : Replies with server info.
author : KellianKizax
creation date : 27/10/2021
*/

// GLOBAL CONSTANT
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info.'),
	async execute(interaction) {
		await interaction.reply(`
		**Server name:** ${interaction.guild.name}\n`
		+ `**Total members:** ${interaction.guild.memberCount}`);
		console.log('success');
	},
};
