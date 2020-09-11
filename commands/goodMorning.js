module.exports = {
	name: 'gm',
	description: 'Response!',
	execute(message, args) {
		message.channel.send(`Good morning ${message.author} 🌞!`);
	}
};
