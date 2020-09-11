const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

const commandLoader = (client) => {
	for (const file of commandFiles) {
		const command = require(`../commands/${file}`);

		client.commands.set(command.name, command);
	}
};

module.exports = commandLoader;
