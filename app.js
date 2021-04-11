const Discord = require('discord.js')
const client = new Discord.Client()


require('dotenv').config()

const BOT_TOKEN = process.env.BOT_TOKEN

client.commands = new Discord.Collection();
const botCommands = require('./commands')


Object.keys(botCommands).map(key => {
	client.commands.set(botCommands[key].name, botCommands[key]);
});


client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
	const args = msg.content.split(/ +/);
	let command = args.shift().split('?')[1].toLowerCase();

	if (!client.commands.has(command)) return;
	console.info(`Called command: ${command}`);

	try {
		client.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	}

});

client.login(BOT_TOKEN)



















