module.exports = {
	name: 'hello',
	description: 'Response!',
	execute(message, args) {
		message.channel.send(`Hello ${message.author} 😄!`);
	}
};
