const commandHandler = async (client, message, prefix) => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (!client.commands.has(commandName)) {
		return message.reply(`Such command doesn't exist ⛔️!`);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Something went wrong executing that command!');
	}
};

module.exports = commandHandler;
