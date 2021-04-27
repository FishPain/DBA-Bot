const fetch = require('node-fetch')
module.exports = {
    name: '?fk',
    description: 'Send an insult',
    execute(msg, args) {
        fetch("https://evilinsult.com/generate_insult.php?type=plain", {
        })
        .then(res => res.text())
        .then(
            (result) => {
                msg.channel.send(`>>> ${result}`)
            })
    },
};