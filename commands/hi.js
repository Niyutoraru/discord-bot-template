module.exports = {
	name: 'hi',
	description: 'Response!',
	execute(message, args) {
		message.channel.send(`Hi ${message.author} 😃 !`);
	}
};
