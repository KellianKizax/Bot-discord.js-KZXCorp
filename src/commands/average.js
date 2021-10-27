/*
filename : average.js
description : Calculates the average of the given values.
author : KellianKizax
creation date : 27/10/2021
*/

// GLOBAL CONSTANT
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('average')
		.setDescription('Calculates the average of the given values.')
		.addStringOption(option =>
			option.setName('values')
				.setDescription('The list of values.')
				.setRequired(true)),

	async execute(interaction) {
		let res = 0;
		let values = interaction.options.getString('values');
		values = values.split(' ');

		values.forEach(element => {
			res = res + parseFloat(element);
		});

		res = res / values.length;

		await interaction.reply(`${res}`);
		console.log('success');
	},
};
