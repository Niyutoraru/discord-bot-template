require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const commandLoader = require('./controllers/commandLoader');
const commandHandler = require('./controllers/commandHandler');
const nullHandler = require('./controllers/nullHandler');

client.commands = new Discord.Collection();

client.on('ready', async () => {
	console.log(`${client.user.tag} is online!`);

	commandLoader(client);

	client.on('message', async (message) => {
		nullHandler(client, message, process.env.PREFIX);

		if (message.content.startsWith(process.env.PREFIX)) {
			commandHandler(client, message, process.env.PREFIX);
		}
	});
});

client.login(process.env.API_DISCORD);
