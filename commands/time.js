module.exports = {
	name: 'time',
	description: 'Returns current time!',
	execute(message, args) {
		const time = new Date();
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		message.channel.send(`It's ${hours}:${minutes}:${seconds} ⏲!`);
	}
};
