const nullHandler = (client, message, prefix) => {
	if (
		message.author === client.user ||
		message.author.id === client.user.id ||
		message.content === 'dm' ||
		message.author.bot ||
		!message.content.startsWith(prefix)
	) {
		return;
	}
};

module.exports = nullHandler;
