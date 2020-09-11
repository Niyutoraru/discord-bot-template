module.exports = {
	name: 'date',
	description: 'Returns current date!',
	execute(message, args) {
		const time = new Date();
		const year = time.getFullYear();
		const month = time.getMonth() + 1; // months are 0 - 11
		const day = time.getDate();

		message.channel.send(`It's ${day}/${month}/${year} 📆!`);
	}
};
