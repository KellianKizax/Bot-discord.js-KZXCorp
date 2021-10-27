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
