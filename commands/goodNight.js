module.exports = {
	name: 'gn',
	description: 'Response!',
	execute(message, args) {
		message.channel.send(`Good night ${message.author} 🌜!`);
	}
};
