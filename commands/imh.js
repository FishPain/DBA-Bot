module.exports = {
	name: '?imh',
	description: 'If you are lost, use this command!',
	execute(msg, args) {
		msg.channel.send('Please call +65 6389 2000');
		console.log(args)
	},
}