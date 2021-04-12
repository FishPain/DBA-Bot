const fs = require('fs')
const rawdata = fs.readFileSync('commands/Resources/timetable.json');
const tt = JSON.parse(rawdata);
let newContent
// console.log(student);

module.exports = {
	name: '?tt',
	description: tt.name,
	execute(msg, args) {
		const currentDay = new Date().getDay()
		currentDay == 5 || currentDay == 6 ? nextWorkingDay = 1 : nextWorkingDay = currentDay + 1
		
		let currentHour = new Date().getHours()

		if (currentHour >= 17 || currentHour < 8) {
			currentHour = 8
		}

		const nextHour = currentHour + 1


		let content =
			`>>> :calendar_spiral: __**${tt.name}**__ :calendar_spiral:\n
:point_right: Time table for **${tt.tt[nextWorkingDay].day}** :point_left:\n`

		for (i = nextHour; i <= 17; i++) {
			tt.tt[nextWorkingDay][i].lesson_type === null 
				? newContent = `:pushpin: ${[i]} 00: ${tt.tt[nextWorkingDay][i].module_name}\n`
				: newContent = `:pushpin: ${[i]} 00: ${tt.tt[nextWorkingDay][i].module_name} (${tt.tt[nextWorkingDay][i].lesson_type} -${tt.tt[nextWorkingDay][i].location})\n`
			content = content + newContent
			}


		msg.channel.send(content);
	},
}
