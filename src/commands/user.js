/*
filename : user.js
description : Replies with user info.
author : KellianKizax
creation date : 27/10/2021
*/

// GLOBAL CONSTANT
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info.'),
	async execute(interaction) {
		await interaction.reply(`
		**Your tag:** ${interaction.user.tag}\n`
		+ `**Your id:** ${interaction.user.id}`);
		console.log('success');
	},
};
