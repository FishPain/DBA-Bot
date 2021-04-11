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


// List of all the commands
client.on('message', msg => {
	if (msg.content == '?help'){
		let list = ":book: This is the list of commands :book: \n:point_right: [Command] => [Description] :point_left:"
		const numberList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
		let i = 0
		client.commands.forEach(element => {
			list = list + `\n :${numberList[i]}: ${element.name} => ${element.description}`
			i++
		})
		msg.channel.send(list)
	}
})

// Commands
client.on('message', msg => {
	const args = msg.content.split(/ +/);
	let command = args.shift().toLowerCase();
	if (!client.commands.has(command) || msg.author.bot) return;
	console.info(`Called command: ${command}`);

	try {
		client.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	}

});



client.login(BOT_TOKEN)



















