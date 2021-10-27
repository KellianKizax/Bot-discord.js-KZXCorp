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
filename : math.js
description : Do an eval on the argument string.
author : KellianKizax
creation date : 27/10/2021
*/

// GLOBAL CONSTANT
const { SlashCommandBuilder } = require('@discordjs/builders');
const Math = require('mathjs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('math')
		.setDescription('Evaluate the argument string.')
		.addStringOption(option =>
			option.setName('expression')
				.setDescription('The mathematic expression.')
				.setRequired(true)),

	async execute(interaction) {
		const res = Math.evaluate(interaction.options.getString('expression'));

		await interaction.reply(`${res}`);
		console.log('success');
	},
};
